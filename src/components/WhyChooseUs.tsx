import { motion } from 'motion/react';
import { UserCheck, Zap, Shield, Wallet, Clock, Fingerprint } from 'lucide-react';

const reasons = [
  { icon: UserCheck, title: 'Experienced Expert', desc: 'Highly qualified specialists dedicated to your oral health.' },
  { icon: Zap, title: 'Modern Equipment', desc: 'Latest diagnostic and treatment tools for precision care.' },
  { icon: Shield, title: 'Pain-Free Treatment', desc: 'Advanced techniques minimizing discomfort and anxiety.' },
  { icon: Wallet, title: 'Affordable Pricing', desc: 'Transparent costs with no hidden fees for all procedures.' },
  { icon: Clock, title: 'Emergency Support', desc: 'Quick response and priority slots for dental emergencies.' },
  { icon: Fingerprint, title: 'Personalized Care', desc: 'Custom treatment plans tailored to your specific needs.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-4xl font-bold mb-6">The Standard of Excellence</h3>
          <p className="text-gray-400 text-lg">We don't just treat teeth; we build lasting relationships based on trust, quality, and exceptional results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-dark p-6 rounded-2xl hover:bg-gray-800/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                <reason.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
