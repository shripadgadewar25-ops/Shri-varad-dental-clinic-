import { motion } from 'motion/react';
import { Sparkles, Stethoscope, Smile, Gem, Syringe, Activity } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth cleaning',
    description: 'Deep cleaning and scaling to prevent cavities and maintain fresh breath.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    icon: Activity,
    title: 'Root canals',
    description: 'Painless RCT using advanced rotary endodontics for saving infected teeth.',
    color: 'text-brand-500',
    bg: 'bg-brand-50'
  },
  {
    icon: Gem,
    title: 'Teeth whitening',
    description: 'Professional laser whitening for a bright, confident, and radiant smile.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    icon: Smile,
    title: 'Dentures & bridges',
    description: 'Custom-fitted dentures and bridges to restore the function and appearance of your smile.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    icon: Stethoscope,
    title: 'Dental implants',
    description: 'Permanent replacement of missing teeth with modern titanium implants.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    icon: Syringe,
    title: 'Veneers & crowns',
    description: 'Custom ceramic caps and veneers for a strong, aesthetically perfect tooth structure.',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Clinical Services</h3>
          <p className="text-lg text-gray-600">We offer a wide range of specialized dental treatments tailored to your needs, using the latest technology in a sterile environment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
