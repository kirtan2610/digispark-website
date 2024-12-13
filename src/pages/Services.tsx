import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Code2, 
  TrendingUp, 
  PenSquare, 
  Mail, 
  Search, 
  BarChart, 
  X 
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { checkRateLimit } from '../utils/rateLimiter';

interface TimeSlot {
  hour: number;
  minute: number;
  period: 'AM' | 'PM';
}

const timeSlots: TimeSlot[] = [];
for (let hour = 9; hour <= 18; hour++) {
  const period = hour < 12 ? 'AM' : 'PM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  timeSlots.push({ hour: displayHour, minute: 0, period });
  timeSlots.push({ hour: displayHour, minute: 30, period });
}

const services = [
  {
    icon: <Rocket />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies tailored to your business goals and target audience.',
  },
  {
    icon: <Target />,
    title: 'Social Media Marketing & Management',
    description: 'Engaging social media campaigns that build brand awareness and drive customer engagement.',
  },
  {
    icon: <PenSquare />,
    title: 'Content Creation',
    description: 'Compelling content that tells your story and connects with your audience.',
  },
  {
    icon: <Mail />,
    title: 'Paid Advertising',
    description: 'Paid advertising involves promoting businesses through targeted ads on platforms like Google, Facebook, and Instagram.'
  },
  {
    icon: <Search />,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to improve your search engine rankings.',
  },
  {
    icon: <Code2 />,
    title: 'Web Development',
    description: 'Crafting custom websites that combine design, functionality, and performance.',
  },
  {
    icon: <BarChart />,
    title: 'Analytics & Reporting',
    description: 'Detailed insights and reporting to measure and optimize campaign performance.',
  },
  {
    icon: <TrendingUp />,
    title: 'Growth & Influencer Marketing',
    description: 'Scalable growth strategies to expand your market presence and reach.',
  },
];

export function Services() {
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
    
    if (value.length > 0) {
      if (value.length !== 10) {
        setPhoneError('Phone number must be 10 digits');
      } else if (!validatePhoneNumber(value)) {
        setPhoneError('Please enter a valid Indian phone number');
      } else {
        setPhoneError('');
      }
    } else {
      setPhoneError('');
    }
  };

  const handleScheduleClick = () => {
    setShowScheduler(true);
  };

  const handleClose = () => {
    setShowScheduler(false);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleSubmit = async () => {
    if (!checkRateLimit('lastConsultationSubmission')) {
      alert('Please wait 5 minutes between consultation requests.');
      return;
    }

    if (selectedDate && selectedTime && phoneNumber && !phoneError) {
      try {
        const consultationData = {
          date: selectedDate,
          time: `${selectedTime.hour}:${selectedTime.minute} ${selectedTime.period}`,
          phoneNumber: phoneNumber,
          submittedAt: new Date(),
          userAgent: navigator.userAgent
        };

        const docRef = await addDoc(collection(db, 'consultations'), consultationData);
        console.log("Document written with ID: ", docRef.id);
        alert('Consultation scheduled successfully!');
        handleClose();
      } catch (error) {
        console.error("Error adding document: ", error);
        alert('Error scheduling consultation. Please try again.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-golden">Services</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Comprehensive Digital Marketing Solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="mb-4 text-golden"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-black mb-6"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/80 text-xl mb-8"
          >
            Let's discuss how our services can help grow your business
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScheduleClick}
            className="bg-black text-golden px-8 py-3 rounded-full font-semibold text-lg hover:bg-black/90 transition-colors"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </AnimatedSection>

      {/* Scheduler Popup */}
      <AnimatePresence>
        {showScheduler && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-lg p-6 max-w-md w-full relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold mb-4 text-golden">
                Schedule Consultation
              </h3>

              {/* Calendar */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Select Date</h4>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-golden text-white"
                />
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Select Time</h4>
                <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(slot)}
                      className={`px-3 py-2 rounded ${
                        selectedTime === slot
                          ? 'bg-golden text-black'
                          : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      {`${slot.hour}:${slot.minute.toString().padStart(2, '0')} ${slot.period}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Number Input with validation */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Your Phone Number</h4>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  required
                  className={`w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-golden text-white ${
                    phoneError ? 'border-red-500' : ''
                  }`}
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={!selectedDate || !selectedTime || !phoneNumber || !!phoneError}
                className={`w-full py-3 rounded-full font-semibold ${
                  selectedDate && selectedTime && phoneNumber && !phoneError
                    ? 'bg-golden text-black hover:bg-golden/90'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Confirm Booking
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}