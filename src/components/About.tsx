import { motion } from 'motion/react';
import { Target, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-50/50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Clinic Interior" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-2xl">State-of-the-art facility</p>
                  <p className="text-gray-200">Designed for your comfort and safety</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">About The Clinic</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Redefining Dental Care Experience</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Shri Varad Clinic & Dental Studio, we believe that a healthy smile is the foundation of well-being. Our clinic merges premium aesthetics with highly advanced medical technology to provide a soothing, anxiety-free environment.
            </p>

            <div className="space-y-6">
              {[
                { icon: Target, title: 'Our Mission', desc: 'To deliver world-class dental care with precision, compassion, and uncompromising hygiene.' },
                { icon: Heart, title: 'Patient-First Approach', desc: 'We prioritize your comfort, ensuring pain-free procedures in a relaxing atmosphere.' },
                { icon: Award, title: 'Excellence in Technology', desc: 'Equipped with digital scanners, lasers, and 3D imaging for accurate diagnosis.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="text-brand-600 hover:text-brand-700 font-bold inline-flex items-center gap-2 transition-colors">
                Know more about our experts
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
