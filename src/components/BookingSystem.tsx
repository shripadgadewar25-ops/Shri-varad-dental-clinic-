import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, Send } from 'lucide-react';

const services = [
  'Teeth whitening',
  'Dental implants',
  'Dentures & bridges',
  'Laser dentistry',
  'Root canals',
  'Teeth cleaning',
  'Teeth reshaping',
  'Veneers & crowns',
  'X-ray'
];

interface BookingData {
  service: string;
  date: Date | null;
  firstName: string;
  lastName: string;
  phone: string;
  notes: string;
}

export default function BookingSystem() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: null,
    firstName: '',
    lastName: '',
    phone: '+91 ',
    notes: ''
  });
  
  // Date selection logic (next 14 days)
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        // exclude sundays
        if (d.getDay() !== 0) {
            dates.push(d);
        }
    }
    return dates;
  }, []);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.date) return;

    const { service, date, firstName, lastName, phone, notes } = bookingData;
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
    const text = `*Patient*\n\n*Name:* ${firstName} ${lastName}\n*Phone:* ${phone}\n*Service:* ${service}\n*Preferred Date:* ${dateStr}\n*Problem/Concern:* ${notes || 'None'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919653442772?text=${encodedText}`, '_blank');
  };

  return (
    <section id="book-appointment" className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-cyan-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Online Booking</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Schedule Your Visit</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">Book an appointment seamlessly directly via WhatsApp.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="flex border-b border-gray-100">
             {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`flex-1 h-2 transition-colors duration-300 ${s <= step ? 'bg-brand-500' : 'bg-gray-100'}`}
              />
            ))}
          </div>

          <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">What type of service do you need?</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((srv) => (
                      <button
                        key={srv}
                        onClick={() => {
                          setBookingData({...bookingData, service: srv});
                          handleNext();
                        }}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          bookingData.service === srv 
                            ? 'border-brand-500 bg-brand-50' 
                            : 'border-gray-100 hover:border-brand-200 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-semibold text-gray-900">{srv}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  <button onClick={handleBack} className="flex items-center text-gray-500 hover:text-brand-600 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </button>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Select a Date</h4>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {availableDates.map((date, i) => {
                      const isSelected = bookingData.date?.getTime() === date.getTime();
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            setBookingData({...bookingData, date});
                            handleNext();
                          }}
                          className={`p-4 rounded-xl border-2 flex flex-col items-center transition-all ${
                            isSelected 
                              ? 'border-brand-500 bg-brand-50' 
                              : 'border-gray-100 hover:border-brand-200'
                          }`}
                        >
                          <span className="text-sm font-medium text-gray-500 mb-1">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </span>
                          <span className="text-xl font-bold text-gray-900">
                            {date.getDate()}
                          </span>
                          <span className="text-xs font-medium text-gray-500 mt-1">
                            {date.toLocaleDateString('en-US', { month: 'short' })}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  <button onClick={handleBack} className="flex items-center text-gray-500 hover:text-brand-600 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </button>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h4>
                      <form id="booking-form" onSubmit={handleBook} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                            <input required type="text" value={bookingData.firstName} onChange={e => setBookingData({...bookingData, firstName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 transition-all outline-none" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                            <input required type="text" value={bookingData.lastName} onChange={e => setBookingData({...bookingData, lastName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 transition-all outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                          <input required type="tel" value={bookingData.phone} onChange={e => setBookingData({...bookingData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 transition-all outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Any specific concerns? (Optional)</label>
                          <textarea rows={3} value={bookingData.notes} onChange={e => setBookingData({...bookingData, notes: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 transition-all outline-none resize-none"></textarea>
                        </div>
                      </form>
                    </div>

                    {/* Summary Card */}
                    <div className="md:w-64 shrink-0 bg-gray-50 rounded-2xl p-6 border border-gray-100 h-fit">
                      <h5 className="font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">Summary</h5>
                      <div className="space-y-4 text-sm mb-6">
                        <div>
                          <p className="text-gray-500 mb-1">Service</p>
                          <p className="font-semibold text-gray-900">{bookingData.service}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Date</p>
                          <p className="font-semibold text-gray-900">{bookingData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        form="booking-form"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-md"
                      >
                        Book on WhatsApp <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
