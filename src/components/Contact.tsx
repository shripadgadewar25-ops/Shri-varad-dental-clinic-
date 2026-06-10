import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+91 ',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, phone, message } = formData;
    const text = `*Patient*\n\n*Name:* ${firstName} ${lastName}\n*Phone:* ${phone}\n*Problem/Concern:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919422187060?text=${encodedText}`, '_blank');
  };
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Book Your Appointment</h3>
            <p className="text-lg text-gray-600 mb-10">We are here to help you achieve the perfect smile. Fill out the form or reach out directly.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 94221 87060</p>
                  <p className="text-sm text-gray-500">Mon-Sat: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@shrivaradstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <a href="https://maps.app.goo.gl/x87XAcUW3RZK3uGw6?g_st=ac" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors inline-block">
                    Shri Varad Clinic & Dental Studio,<br/>Nanded
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                  placeholder="+91" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none" 
                  placeholder="Describe your concern..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors">
                Send Message via WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
