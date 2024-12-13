import React from 'react';
import { motion } from 'framer-motion';

export function CaseStudy2() {
const caseStudies = {
  'professional-academy': {
    title: 'Establishing a Strong Digital Identity for Professional Academy',
    category: 'Digital Identity & Brand Strategy',
    client: 'Professional Academy',
    duration: '1.5 months',
    overview: 'Professional Academy is a reputed tuition center offering personalized education for students across multiple subjects and grades. To enhance their brand presence and attract more students, the academy sought help in creating a new logo, managing social media accounts, producing engaging content, and running effective paid advertising campaigns.',
    objective: 'To build a cohesive brand identity, improve social media engagement, and drive student enrollments through a comprehensive digital strategy.',
    challenges: [
      'Lack of a modern logo and visual identity to represent the academy\'s quality and professionalism',
      'Limited engagement and inconsistent content on social media platforms',
      'No prior experience with running paid advertising campaigns'
    ],
    strategy: {
      title: 'Strategy by Digi Spark',
      sections: [
        {
          title: 'Logo Design',
          points: [
            'Created a sleek, modern logo reflecting the academy\'s values of quality education and student success',
            'Designed multiple logo concepts and finalized one after incorporating client feedback',
            'Delivered the logo in various formats for use across digital and print media'
          ]
        },
        {
          title: 'Social Media Management',
          points: [
            'Revamped Professional Academy\'s profiles on platforms like Instagram, Facebook, and LinkedIn to ensure a consistent and professional look',
            'Implemented a posting schedule to maintain regular updates and engagement'
          ]
        },
        {
          title: 'Content Creation',
          points: [
            'Produced high-quality, educational, and promotional content, including:',
            'Informative posts about the academy\'s teaching methods and success stories',
            'Engaging visuals like study tips, motivational quotes, and infographics tailored to students and parents',
            'Video snippets of classroom activities and tutor introductions to build trust'
          ]
        },
        {
          title: 'Paid Advertising Campaigns',
          points: [
            'Designed and launched targeted ad campaigns on Facebook and Instagram using Meta Business Manager',
            'Highlighted key offerings like subject-specific coaching, personalized learning plans, and success rates',
            'Created ads promoting limited-time discounts and free demo classes to encourage sign-ups'
          ]
        },
        {
          title: 'Performance Monitoring',
          points: [
            'Tracked key performance metrics, including reach, engagement, and conversions, to optimize campaign results',
            'Conducted A/B testing on ad creatives and messaging to maximize ROI'
          ]
        }
      ]
    },
    results: [
      'Enhanced Brand Identity: The new logo received positive feedback and established a professional image',
      'Increased Engagement: Social media accounts saw a 70% increase in engagement rates, with posts regularly shared by students and parents',
      'Student Enrollments: Paid ads drove over 200 inquiries and resulted in a 50% increase in student registrations',
      'Cost Efficiency: Ad optimization reduced the cost per inquiry by 30%, maximizing the academy\'s advertising budget'
    ],
    conclusion: 'By partnering with Digi Spark, Professional Academy transformed its digital presence, created a strong brand identity, and successfully increased enrollments. The combination of creative design, engaging content, and strategic advertising ensured measurable growth and positioned the academy as a trusted name in the local education space.',
    images: [
      '/pa.jpg'
    ]
  }
};

const study = caseStudies['professional-academy'];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src={study.images[0]} 
            alt={study.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-golden mb-4">{study.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{study.title}</h1>
            <div className="flex justify-center space-x-8">
              <div>
                <p className="text-gray-400">Client</p>
                <p className="text-xl">{study.client}</p>
              </div>
              <div>
                <p className="text-gray-400">Duration</p>
                <p className="text-xl">{study.duration}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* Client Overview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-golden mb-4">Client Overview</h2>
            <p className="text-gray-300">{study.overview}</p>
          </motion.div>

          {/* Objective */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-golden mb-4">Objective</h2>
            <p className="text-gray-300">{study.objective}</p>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-golden mb-4">Challenges</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {study.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </motion.div>

          {/* Strategy */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-golden mb-6">{study.strategy.title}</h2>
            <div className="space-y-8">
              {study.strategy.sections.map((section, index) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-golden mb-4">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <motion.div 
                  key={index} 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg hover:bg-gray-900/80 transition-colors"
                >
                  <p className="text-gray-300">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-golden mb-4">Conclusion</h2>
            <p className="text-gray-300">{study.conclusion}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}