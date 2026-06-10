import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1598256989800-fea5a03d7c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Clinic Tour</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
             >
                <img src={src} alt="Clinic interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-500" />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
