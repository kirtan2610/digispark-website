import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { checkRateLimit } from '../utils/rateLimiter';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
}

const openPositions: JobPosition[] = [
  {
    title: 'Graphic Designer',
    department: 'Designing',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Content Writer',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Social Media Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
  },
];

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!checkRateLimit('lastCareerSubmission')) {
      alert('Please wait 5 minutes between submissions.');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      alert('Please fill all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email with EmailJS
      await emailjs.send(
        'service_pec7f0l',
        'template_yr012qq',
        {
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience || 'Not specified',
          message: `New job application received for ${formData.position} position.`,
          reply_to: formData.email
        },
        'KUe-dBUVNhgdQfHxL'
      );

      // Save application data to Firestore
      const applicationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        submittedAt: new Date(),
        status: 'new'
      };

      await addDoc(collection(db, 'careerApplications'), applicationData);

      // Prepare WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `Hi, I'm ${formData.name}. I'm interested in the ${formData.position} position at DigiSpark.\n\nI would like to submit my resume for the position.`
      );
      const whatsappUrl = `https://wa.me/919265002413?text=${whatsappMessage}`;

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null
      });

      alert('Application registered successfully! You will now be redirected to WhatsApp to send your resume.');
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error("Error submitting application:", error);
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh]"
      >
        <div className="absolute inset-0">
          <img 
            src="/career-bg.jpg" 
            alt="Careers at DigiSpark" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-golden mb-4"
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Build your career with DigiSpark
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Open Positions Section */}
      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-golden"
          >
            Open Positions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-golden">{position.title}</h3>
                <div className="space-y-2 text-gray-400">
                  <p><span className="font-medium">Department:</span> {position.department}</p>
                  <p><span className="font-medium">Location:</span> {position.location}</p>
                  <p><span className="font-medium">Type:</span> {position.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Application Form Section */}
      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6 text-center text-golden"
          >
            Apply Now
          </motion.h2>
          
          {/* WhatsApp Direct Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <a
              href="https://wa.me/919265002413"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <svg 
                className="w-6 h-6 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Us on WhatsApp
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-gray-400">
              Fill out the form below and you'll be redirected to WhatsApp to send your resume
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Position Applied For"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Years of Experience"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-golden focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded font-semibold transition-all ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-golden text-black hover:bg-golden/90'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          </motion.form>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Careers; 