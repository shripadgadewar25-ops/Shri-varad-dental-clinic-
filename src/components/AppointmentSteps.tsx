import { motion } from 'motion/react';
import { CalendarCheck, Stethoscope, Activity, ThumbsUp } from 'lucide-react';

const steps = [
  { icon: CalendarCheck, title: 'Consultation', desc: 'Book your slot and discuss your concerns.' },
  { icon: Stethoscope, title: 'Diagnosis', desc: 'Thorough examination and digital scanning.' },
  { icon: Activity, title: 'Treatment', desc: 'Painless procedure with advanced tools.' },
  { icon: ThumbsUp, title: 'Follow-up', desc: 'Post-treatment care to ensure perfect healing.' },
];

export default function AppointmentSteps() {
  return (
    <section className="py-24 bg-brand-600 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to a Perfect Smile</h3>
           <p className="text-brand-100 text-lg">A simple, transparent, and seamless experience.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-brand-400/50 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-white text-brand-600 flex items-center justify-center shadow-xl mb-6 shadow-brand-900/20">
                <step.icon className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-brand-100 text-sm px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#book-appointment" className="inline-block bg-white text-brand-600 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-50 hover:scale-105 transition-all">
                Start Your Journey Today
            </a>
        </div>
      </div>
    </section>
  );
}
