import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Building2, Car, Map, Plus, Save, CheckCircle2, Loader2, AlertCircle, Edit2, Trash2, X } from "lucide-react";
import imageCompression from 'browser-image-compression';
import { supabase } from "../lib/supabase";

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<"properties" | "vehicles" | "tours">("properties");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [items, setItems] = useState<any[]>([]);
  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    fetchItems();
    setEditingItem(null);
    setErrorMessage(null);
    setSuccessMessage(null);
  }, [activeTab]);

  const fetchItems = async () => {
    setIsLoadingItems(true);
    try {
      const { data, error } = await supabase
        .from(activeTab)
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setItems(data || []);
    } catch (error: any) {
      console.error("Error fetching items:", error);
    } finally {
      setIsLoadingItems(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    
    try {
      const { error } = await supabase.from(activeTab).delete().eq('id', id);
      if (error) throw error;
      
      setSuccessMessage("Item deleted successfully!");
      setTimeout(() => setSuccessMessage(null), 3000);
      fetchItems();
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to delete item.");
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingItem(null);
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // 1. Upload Image (Optional if editing)
      const imageFile = formData.get('image') as File;
      let imageUrl = editingItem ? editingItem.image_url : '';

      if (imageFile && imageFile.size > 0) {
        // Compress the image before uploading
        const options = {
          maxSizeMB: 0.3, // Max 300 KB
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        
        const compressedFile = await imageCompression(imageFile, options);

        const fileExt = compressedFile.name.split('.').pop() || 'jpg';
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${activeTab}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, compressedFile);

        if (uploadError) throw new Error(`Image upload failed: ${uploadError.message}`);

        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);

        imageUrl = publicUrl;
      } else if (!editingItem) {
        throw new Error("Image is required for new items.");
      }

      // 2. Prepare Record Data
      const recordData: Record<string, any> = {
        image_url: imageUrl,
        description: formData.get('description'),
      };

      if (activeTab === 'properties') {
        recordData.title = formData.get('title');
        recordData.price = formData.get('price');
        recordData.location = formData.get('location');
        recordData.status = formData.get('status');
        recordData.property_type = formData.get('property_type');
        recordData.beds = formData.get('beds') ? parseInt(formData.get('beds') as string) : null;
        recordData.baths = formData.get('baths') ? parseInt(formData.get('baths') as string) : null;
        recordData.sq_ft = formData.get('sq_ft');
      } else if (activeTab === 'vehicles') {
        recordData.make_model = formData.get('make_model');
        recordData.price = formData.get('price');
        recordData.condition = formData.get('condition');
        recordData.body_type = formData.get('body_type');
        recordData.year = formData.get('year') ? parseInt(formData.get('year') as string) : null;
        recordData.mileage = formData.get('mileage');
        recordData.transmission = formData.get('transmission');
      } else if (activeTab === 'tours') {
        recordData.package_name = formData.get('package_name');
        recordData.price = formData.get('price');
        recordData.duration = formData.get('duration');
        recordData.location = formData.get('location');
      }

      // 3. Insert or Update
      if (editingItem) {
        const { error: updateError } = await supabase
          .from(activeTab)
          .update(recordData)
          .eq('id', editingItem.id);
        if (updateError) throw new Error(`Update failed: ${updateError.message}`);
        setSuccessMessage(`Successfully updated ${activeTab.slice(0, -1)}!`);
      } else {
        const { error: insertError } = await supabase
          .from(activeTab)
          .insert([recordData]);
        if (insertError) throw new Error(`Insert failed: ${insertError.message}`);
        setSuccessMessage(`Successfully added new ${activeTab.slice(0, -1)}!`);
      }

      setTimeout(() => setSuccessMessage(null), 5000);
      form.reset();
      setEditingItem(null);
      fetchItems();
    } catch (error: any) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Admin Dashboard
          </motion.h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab("properties")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "properties"
                ? "bg-navy-900 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Building2 size={18} /> Properties
          </button>
          <button
            onClick={() => setActiveTab("vehicles")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "vehicles"
                ? "bg-navy-900 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Car size={18} /> Vehicles
          </button>
          <button
            onClick={() => setActiveTab("tours")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "tours"
                ? "bg-navy-900 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Map size={18} /> Tours
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 text-green-800 border border-green-200 p-4 rounded-xl mb-8 flex items-center gap-3"
          >
            <CheckCircle2 className="text-green-500 flex-shrink-0" />
            <span className="font-medium">{successMessage}</span>
          </motion.div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 text-red-800 border border-red-200 p-4 rounded-xl mb-8 flex items-start gap-3"
          >
            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" />
            <span className="font-medium text-sm">{errorMessage}</span>
          </motion.div>
        )}

        {/* Forms */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-navy-900 flex items-center gap-2">
              {editingItem ? <Edit2 className="text-gold-500" /> : <Plus className="text-gold-500" />}
              {editingItem ? 'Edit' : 'New'} {activeTab === "properties" ? "Property" : activeTab === "vehicles" ? "Vehicle" : "Tour"}
            </h2>
            {editingItem && (
              <button onClick={cancelEdit} className="text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm font-medium">
                <X size={16} /> Cancel Edit
              </button>
            )}
          </div>

          <form key={editingItem ? editingItem.id : 'new'} ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {activeTab === "properties" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input required type="text" name="title" defaultValue={editingItem?.title || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. Luxury Villa in Kololo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input required type="text" name="price" defaultValue={editingItem?.price || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. $850,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input required type="text" name="location" defaultValue={editingItem?.location || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. Kololo, Kampala" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select name="status" defaultValue={editingItem?.status || 'For Sale'} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none bg-white">
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select name="property_type" defaultValue={editingItem?.property_type || 'House'} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none bg-white">
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Commercial</option>
                      <option>Land</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Beds</label>
                      <input type="number" name="beds" defaultValue={editingItem?.beds || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="4" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Baths</label>
                      <input type="number" name="baths" defaultValue={editingItem?.baths || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sq Ft</label>
                      <input type="text" name="sq_ft" defaultValue={editingItem?.sq_ft || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="2,500" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "vehicles" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make & Model</label>
                    <input required type="text" name="make_model" defaultValue={editingItem?.make_model || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. Mercedes-Benz G-Class" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input required type="text" name="price" defaultValue={editingItem?.price || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. $120,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                    <select name="condition" defaultValue={editingItem?.condition || 'New'} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none bg-white">
                      <option>New</option>
                      <option>Used</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Body Type</label>
                    <select name="body_type" defaultValue={editingItem?.body_type || 'SUV'} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none bg-white">
                      <option>SUV</option>
                      <option>Sedan</option>
                      <option>Truck</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                      <input type="number" name="year" defaultValue={editingItem?.year || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="2024" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                      <input type="text" name="mileage" defaultValue={editingItem?.mileage || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="0 km" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Trans.</label>
                      <select name="transmission" defaultValue={editingItem?.transmission || 'Auto'} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none bg-white">
                        <option>Auto</option>
                        <option>Manual</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "tours" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package Name</label>
                    <input required type="text" name="package_name" defaultValue={editingItem?.package_name || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. Bwindi Gorilla Trekking" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input required type="text" name="price" defaultValue={editingItem?.price || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. From $1,200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <input required type="text" name="duration" defaultValue={editingItem?.duration || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. 3 Days, 2 Nights" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input required type="text" name="location" defaultValue={editingItem?.location || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none" placeholder="e.g. Bwindi Impenetrable Forest" />
                  </div>
                </div>
              </>
            )}

            {/* Common Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image {editingItem && <span className="text-gray-400 font-normal">(Leave blank to keep current image)</span>}
                </label>
                <input required={!editingItem} type="file" name="image" accept="image/*" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-navy-50 file:text-navy-900 hover:file:bg-navy-100 cursor-pointer" />
                {editingItem && editingItem.image_url && (
                  <div className="mt-2">
                    <img src={editingItem.image_url} alt="Current" className="h-20 w-20 object-cover rounded-lg border border-gray-200" />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea required name="description" defaultValue={editingItem?.description || ''} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none resize-none" placeholder="Enter detailed description..."></textarea>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 md:flex-none px-8 py-4 bg-navy-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-navy-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                {isSubmitting ? 'Saving...' : (editingItem ? 'Update' : 'Save')}
              </button>
              {editingItem && (
                <button 
                  type="button"
                  onClick={cancelEdit}
                  className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Existing Items List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
            Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          
          {isLoadingItems ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin text-gold-500" size={32} />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No items found. Add your first one above!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div key={item.id} className="border border-gray-100 rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img src={item.image_url} alt="Thumbnail" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-navy-900 truncate">
                      {item.title || item.make_model || item.package_name}
                    </h3>
                    <p className="text-gold-600 font-medium text-sm mt-1">{item.price}</p>
                    <p className="text-gray-500 text-sm truncate mt-1">
                      {item.location || `${item.year} • ${item.mileage}`}
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="text-sm px-3 py-1.5 bg-gray-50 text-navy-900 rounded-lg font-medium hover:bg-gray-100 flex items-center gap-1"
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-sm px-3 py-1.5 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 flex items-center gap-1"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
