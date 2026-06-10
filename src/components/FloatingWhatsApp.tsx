import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          href="#book-appointment"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('book-appointment')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all cursor-pointer group"
        >
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-2 bg-gray-900 text-white text-xs whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Schedule your visit
          </span>
          
          {/* Ping effect */}
          <span className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-75 -z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
