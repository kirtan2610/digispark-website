import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';

const projects = [
  {
    title: 'Brand Awareness and Membership Growth for SFW The Gym',
    category: 'Brand Strategy',
    image: 'https://content3.jdmagicbox.com/comp/vadodara/f3/0265px265.x265.230101233148.b8f3/catalogue/sfw-the-gym-sama-savali-road-sama-vadodara-fitness-centres-BCzjAXnch3.jpg',
    description: 'Complete digital transformation and rebranding campaign.',
    link: '/CaseStudy'
  },
  {
    title: 'Establishing a Strong Digital Identity for Professional Academy',
    category: 'Digital Identity',
    image: '/pa.jpg',
    description: 'Build a cohesive brand identity, improve social media engagement, and drive student enrollments through a comprehensive digital strategy.',
    link: '/CaseStudy2'
  },
  {
    title: ' Boosting Footfall for a Local Cafe with Paid Advertising and Social Media Management',
    category: 'Social Media Management',
    image: 'https://www.koacafe.in/images/img/img4.jpg',
    description: 'Koa Cafe aims to increase customer footfall and promote its new offers, such as seasonal discounts and combo deals.',
    link: '/case-study/koa-cafe'
  }
];

export function Work() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-golden">Work</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Showcasing Our Success Stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="h-64 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link 
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-golden text-black px-6 py-2 rounded-full font-semibold hover:bg-golden/90 transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-golden text-sm mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Working Process</h2>
            <p className="text-xl text-gray-400">in 3 steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/50 p-8 rounded-lg text-center hover:bg-black/60 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-golden rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-golden">Planning & Strategy</h3>
              <p className="text-gray-300">
                The initial step after getting the project is to discuss and plan the skills, methods and techniques required for its implementation.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black/50 p-8 rounded-lg text-center hover:bg-black/60 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-golden rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-golden">Design & Develop</h3>
              <p className="text-gray-300">
                After getting the project requirement, we start working on design and framing with unlimited revisions for your satisfaction.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-black/50 p-8 rounded-lg text-center hover:bg-black/60 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-golden rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-golden">Test & Deliver</h3>
              <p className="text-gray-300">
                We test each individual activity and integrate them all together in a process to test the final project and ensure no error exist. After the final approval from the client we deliver the project.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}