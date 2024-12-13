import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';


const team = [
  {
    name: 'Kirtan Brahmbhatt',
    role: 'CEO & Founder',
    image: 'Ceo.jpg',
    bio: 'The CEO of Digi Spark, with a strong IT background, combines technical expertise and a passion for digital marketing to deliver impactful campaigns. Focused on creativity and results, they lead the agency in empowering brands to succeed in the digital space.',
    social: {
      linkedin: "https://www.linkedin.com/in/contactkirtan/",
      instagram: "https://www.instagram.com/kirtan._26/"
    }
  },
  {
    name: 'Rudra Brahmbhatt',
    role: 'Head of Finance',
    image: 'Head of fin.jpeg',
    bio: 'Rudra, the Head of Finance at Digi Spark, leverages his commerce background to ensure the agency\'s financial stability and growth. With a strategic approach and a focus on efficiency, he plays a key role in driving the agency\'s success.',
    social: {
      linkedin: "https://www.linkedin.com/in/rudra-brahmbhatt-184a1222a/",
      instagram: "https://www.instagram.com/rudra_brahmbhatt23/"
    }
  },
];

export function Team() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center opacity-30 grayscale" />
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
              Our <span className="text-golden">Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Meet the Experts Behind DigiSpark
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-lg overflow-hidden max-w-sm w-full"
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className="aspect-square relative bg-gray-900"
                >
                  
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover bg-gray-900 p-2"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <div className="flex space-x-4">
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-[#0A66C2] transition-colors"
                      >
                        <Linkedin size={24} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-[#E4405F] transition-colors"
                      >
                        <Instagram size={24} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="p-6"
                >
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-golden text-sm mb-2">{member.role}</div>
                  <p className="text-gray-400">{member.bio}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Join Us Section */}
      <AnimatedSection className="py-20 bg-golden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-black mb-6"
          >
            Join Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/80 text-xl mb-8"
          >
            We're always looking for talented individuals to join our growing team
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/careers')}
            className="bg-black text-golden px-8 py-3 rounded-full font-semibold text-lg hover:bg-black/90 transition-colors"
          >
            View Open Positions
          </motion.button>
        </div>
      </AnimatedSection>
    </div>
  );
}