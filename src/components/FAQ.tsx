import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is it safe to visit the clinic during COVID/flu seasons?",
    a: "Absolutely. We maintain strict sanitization protocols, use high-grade sterilization for all instruments, and our staff follows all safety guidelines."
  },
  {
    q: "Do you offer EMIs for expensive treatments like implants or braces?",
    a: "Yes, we provide flexible payment plans and 0% EMI options for extensive treatments to make premium dental care affordable."
  },
  {
    q: "Are the treatments completely painless?",
    a: "We utilize advanced anesthetics, modern tools, and techniques designed to minimize discomfort, making most procedures virtually painless."
  },
  {
    q: "How often should I get a routine dental check-up?",
    a: "We recommend visiting every 6 months for a routine check-up and professional cleaning to maintain optimal oral health."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
