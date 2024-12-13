import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.bedigitech.com/img/social-media-marketing.jpg')] bg-cover bg-center opacity-10 grayscale" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-golden">Transform</span> Your Digital Presence
              <br />
              With Us
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              <br />
              <br />
             
              We are a team of passionate marketers whose goal is to improve
              everyone's life through disruptive products. We build great
              products to solve your business problems.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/Services')}
              className="bg-golden text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-golden/90 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-20 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our <span className="text-golden">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            We specialize in providing comprehensive social media marketing solutions to help businesses of all sizes succeed online. Our range of services is designed to elevate your brand, engage your audience, and drive real results.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="text-golden" size={40} />,
                title: 'Digital Strategy',
                  },
              {
                icon: <Target className="text-golden" size={40} />,
                title: 'Social Media Marketing',
              },
              {
                icon: <Users className="text-golden" size={40} />,
                title: 'Content Creation',
              },
              {
                icon: <TrendingUp className="text-golden" size={40} />,
                title: 'Analytics & SEO',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-6 rounded-lg text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="mb-4 flex justify-center"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">
                  Comprehensive solutions tailored to your business needs
                </p>
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
            Ready to Spark Your Digital Growth?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/80 text-xl mb-8"
          >
            Let's create something amazing together
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-black text-golden px-8 py-3 rounded-full font-semibold text-lg hover:bg-black/90 transition-colors"
          >
            Contact Us Today
          </motion.button>
        </div>
      </AnimatedSection>
    </div>
  );
}
