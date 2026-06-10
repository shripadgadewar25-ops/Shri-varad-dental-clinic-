import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    date: '2 months ago',
    text: 'Absolutely brilliant clinic! The doctors are very professional, the ambiance is soothing, and my root canal was completely painless. Highly recommended for accurate diagnosis.',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    date: '3 weeks ago',
    text: 'I was always scared of dentists until I visited Shri Varad Clinic & Dental Studio. The technology they use is amazing, and everything was explained to me clearly. Got my teeth whitened and I love my new smile!',
    rating: 5
  },
  {
    name: 'Anjali Desai',
    date: '1 week ago',
    text: 'Premium experience from start to finish. Highly hygienic place with very polite staff. Dr. is highly experienced. The aligners are working perfectly.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold text-gray-900">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
