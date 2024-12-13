import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Zap } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "url('/aboutus.jpg')",
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.20) grayscale(100%)'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-golden">DigiSpark</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Igniting Digital Success Stories Since 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <AnimatedSection className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-300">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl leading-relaxed"
            >
              Digi Spark is a dynamic and innovative Social Media Marketing Agency dedicated to helping businesses spark their online presence and achieve digital success. With a team of passionate creatives and digital strategists, we specialize in crafting tailored solutions that elevate brands and drive real results.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl leading-relaxed"
            >
              At Digi Spark, we believe in the power of storytelling and meaningful connections. We work closely with our clients to understand their unique voice and vision, creating engaging content and strategies that resonate with their audience. From social media account management to content creation, paid advertising, and analytics, we offer a comprehensive suite of services designed to ignite brands and spark growth.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed"
            >
              Our mission is simple: to be your trusted partner in the digital world, guiding you through the ever-evolving landscape of social media marketing. Whether you're a small startup or a large corporation, we're here to help you stand out, connect with your audience, and achieve your business goals.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl leading-relaxed text-golden font-semibold text-center mt-12"
            >
              Join us at Digi Spark and let's spark something incredible together!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-golden text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-golden/90 transition-colors"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-300">
                Our mission is to provide innovative and tailored solutions that
                elevate brands, engage audiences, and drive real results. With a
                team of passionate creatives and digital strategists, we
                specialize in crafting compelling campaigns and strategies that
                spark growth and make an impact.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl text-gray-300">
                We are a dynamic Social Media Marketing Agency dedicated to
                helping businesses ignite their online presence and achieve
                digital success. Whether you're a startup, small business, or
                established brand, Digi Spark is here to be your trusted partner
                in the digital world. Let's spark something incredible together!
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="py-20 bg-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-black text-center">
            {[
              { number: "20+", label: "Clients Served" },
              { number: "100k+", label: "Impressions" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Niche Specialist" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div 
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our <span className="text-golden">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-golden" size={40} />,
                title: 'Excellence',
              },
              {
                icon: <Users className="text-golden" size={40} />,
                title: 'Collaboration',
              },
              {
                icon: <Globe className="text-golden" size={40} />,
                title: 'Innovation',
              },
              {
                icon: <Zap className="text-golden" size={40} />,
                title: 'Impact',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gray-900 p-6 rounded-lg text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="mb-4 flex justify-center"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
