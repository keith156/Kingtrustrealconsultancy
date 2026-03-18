import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyqsswxadbsssgijxcfi.supabase.co';
const supabaseKey = 'sb_publishable_VS5yBHtTAq2OeUrLb-54Tg_7akikCeO';

const supabase = createClient(supabaseUrl, supabaseKey);

const vehiclesData = [
  {
    make_model: "Toyota Premio UA 636CB",
    price: "45M",
    condition: "Used",
    body_type: "Sedan",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Reliable white Toyota Premio. Well maintained.",
    image_url: "/images/vehicles/premio_white_45m.jpeg",
    featured: false
  },
  {
    make_model: "Toyota Rumion UA 167CF",
    price: "31M",
    condition: "Used",
    body_type: "SUV",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Spacious maroon Toyota Rumion.",
    image_url: "/images/vehicles/rumion_maroon_31m.jpeg",
    featured: false
  },
  {
    make_model: "Toyota Premio UA 793BS",
    price: "43M",
    condition: "Used",
    body_type: "Sedan",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Sleek black Toyota Premio.",
    image_url: "/images/vehicles/premio_black_43m.jpeg",
    featured: false
  },
  {
    make_model: "Toyota Probox UA 412CF",
    price: "28M",
    condition: "Used",
    body_type: "Used",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Versatile white Toyota Probox.",
    image_url: "/images/vehicles/probox_white_28m.jpeg",
    featured: false
  },
  {
    make_model: "Toyota Noah UA 174BV",
    price: "37M",
    condition: "Used",
    body_type: "SUV",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Comfortable silver Toyota Noah.",
    image_url: "/images/vehicles/noah_silver_37m.jpeg",
    featured: false
  },
  {
    make_model: "Toyota Ractis UA 528BB",
    price: "28M",
    condition: "Used",
    body_type: "Sedan",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Efficient silver Toyota Ractis.",
    image_url: "/images/vehicles/ractis_silver_28m.jpeg",
    featured: false
  },
  {
    make_model: "Toyota Noah UA 263CX",
    price: "38M",
    condition: "Used",
    body_type: "SUV",
    year: null,
    mileage: "N/A",
    transmission: "Automatic",
    description: "Perfect family black Toyota Noah.",
    image_url: "/images/vehicles/noah_black_38m.jpeg",
    featured: false
  },
  {
    make_model: "Isuzu Truck (Dump Truck)",
    price: "100M",
    condition: "Used",
    body_type: "Trucks",
    year: null,
    mileage: "N/A",
    transmission: "Manual",
    description: "Powerful Isuzu dump truck for heavy duty tasks.",
    image_url: "/images/vehicles/isuzu_truck_100m.jpeg",
    featured: false
  }
];

async function insertVehicles() {
  const { data, error } = await supabase.from('vehicles').insert(vehiclesData).select();
  if (error) {
    console.error('Error inserting vehicles:', error);
    process.exit(1);
  }
  console.log('Successfully inserted vehicles:', data.length);
}

insertVehicles();
