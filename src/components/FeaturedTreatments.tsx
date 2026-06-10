import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const treatments = [
  {
    title: 'Clear Aligners',
    desc: 'Straighten your teeth invisibly and comfortably without traditional metal brackets.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Dental Implants',
    desc: 'The most natural-looking and durable solution for missing teeth restoration.',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5a03d7c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Smile Designing',
    desc: 'Digital smile design using veneers and composites to craft your perfect aesthetic smile.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Laser Dentistry',
    desc: 'Minimally invasive, painless procedures for gum treatments and minor surgeries.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  }
];

export default function FeaturedTreatments() {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Premium Care</h2>
            <h3 className="text-4xl font-bold text-gray-900">Featured Treatments</h3>
          </div>
          <a href="#contact" className="hidden border-b-2 border-brand-600 text-brand-600 font-bold hover:text-brand-800 hover:border-brand-800 transition-colors md:flex items-center gap-2 pb-1">
            View All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
