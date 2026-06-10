import { motion } from 'motion/react';
import { ArrowRight, Calendar, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-brand-50/50 blur-3xl opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-50/50 blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
            <span>Premium Dental Care Studio</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Nanded's Advanced Dental Care & <br/>
            <span className="text-gradient">Perfect Smile Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Experience the future of dentistry. We combine cutting-edge technology with unparalleled expertise to deliver painless, hygienic, and personalized treatments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#book-appointment" className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a href="#services" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:border-gray-300">
              Explore Treatments
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
              </div>
              <span className="font-medium text-gray-700">100% Hygienic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-600" />
              </div>
              <span className="font-medium text-gray-700">5.0 Patient Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-cyan-300 opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern Dental Clinic"
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 -left-8 glass px-4 py-3 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Advanced Tech</p>
                <p className="text-xs text-gray-500">Painless treatment</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -right-8 glass px-4 py-3 rounded-2xl flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">2000+ Smiles</p>
                <p className="text-xs text-gray-500">Happy Patients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
