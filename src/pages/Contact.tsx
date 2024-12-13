import React from 'react';
import { useState, useCallback, memo } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { checkRateLimit } from '../utils/rateLimiter';

// Memoize any static content components
const ContactInfo = memo(() => (
  <div className="bg-black p-8 rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-golden">Contact Information</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-golden font-semibold">Address</h3>
        <p className="text-white">Gotri, Vadodara 390021</p>
      </div>
      <div>
        <h3 className="text-golden font-semibold">Email</h3>
        <a 
          href="mailto:digisparkx28@gmail.com" 
          className="text-white hover:text-golden transition-colors"
        >
          digisparkx28@gmail.com
        </a>
      </div>
      <div>
        <h3 className="text-golden font-semibold">Phone</h3>
        <a 
          href="tel:+919265002413" 
          className="text-white hover:text-golden transition-colors"
        >
          +91 92650 02413
        </a>
      </div>
    </div>
  </div>
));

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize the change handler
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!checkRateLimit('lastContactMessageSubmission')) {
      alert('Please wait 5 minutes between messages.');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const messageData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date(),
        userAgent: navigator.userAgent,
        status: 'unread'
      };

      await addDoc(collection(db, 'contactMessages'), messageData);
      
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: ''
      });

      alert('Message sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error("Error sending message:", error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section with Image */}
      <div className="relative h-[40vh] w-full">
        <img 
          src="/contact.jpg" 
          alt="Contact Us" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-golden mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with us for any inquiries</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          
          <div className="bg-black p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-golden">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none pr-12"
                  required
                />
                {formData.email && (
                  <a 
                    href={`mailto:${formData.email}`}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-golden hover:text-golden/80"
                    title="Open in email app"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none pr-12"
                  required
                />
                {formData.phone && (
                  <a 
                    href={`tel:${formData.phone}`}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-golden hover:text-golden/80"
                    title="Call this number"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                )}
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none resize-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded font-semibold transition-colors duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-golden text-black hover:bg-golden/90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;