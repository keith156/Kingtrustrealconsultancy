import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-navy-900 text-white pt-32 pb-20 px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Privacy <span className="text-gold-500">Policy</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-12"
        >
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600">
                <Shield size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-navy-900">1. Information We Collect</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information you provide directly to us when you fill out contact forms, inquire about properties or vehicles, or book a tour. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Name and contact details (email, phone number)</li>
              <li>Details of your inquiries or requested services</li>
              <li>Any other information you choose to provide in messages</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600">
                <Eye size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-navy-900">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The information we collect is used solely to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate updates regarding your bookings or listings</li>
              <li>Improve our website and customer service experience</li>
              <li>Comply with legal obligations in Uganda</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600">
                <Lock size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-navy-900">3. Information Security</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-navy-900">4. Cookies and Tracking</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although some features of the site may not function properly as a result.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">5. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
              <br /><br />
              <strong>King Trust Real Consultancy Limited</strong><br />
              Kikaya Bahai road, opposite Total Bahai<br />
              Kampala, Uganda<br />
              Email: info@kingtrustconsultancy.com
            </p>
          </section>

          <div className="pt-8 border-t border-gray-100 text-sm text-gray-500 text-center">
            Last Updated: March 2026
          </div>
        </motion.div>
      </div>
    </div>
  );
}
