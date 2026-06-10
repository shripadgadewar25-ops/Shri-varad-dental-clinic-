import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                SV
              </div>
              <span className="font-display font-bold text-xl text-white">
                Shri Varad Clinic & Dental Studio
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Premium dental care blending advanced technology with exceptional patient comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-400">Services</a></li>
              <li><a href="#treatments" className="hover:text-brand-400">Treatments</a></li>
              <li><a href="#testimonials" className="hover:text-brand-400">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Treatments</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-brand-400">Teeth whitening</a></li>
              <li><a href="#services" className="hover:text-brand-400">Dental implants</a></li>
              <li><a href="#services" className="hover:text-brand-400">Laser dentistry</a></li>
              <li><a href="#services" className="hover:text-brand-400">Root canals</a></li>
              <li><a href="#services" className="hover:text-brand-400">Teeth cleaning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between"><span>Mon - Sat:</span> <span>10 AM - 9 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-brand-400">Holiday</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shri Varad Clinic & Dental Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
