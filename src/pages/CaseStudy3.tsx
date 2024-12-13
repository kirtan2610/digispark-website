import React from 'react';
import { motion } from 'framer-motion';

export function CaseStudy3() {
  const study = {
    title: 'Boosting Footfall for a Local Cafe with Paid Advertising and Social Media Management',
    category: 'Digital Marketing & Social Media',
    client: 'Koa Cafe',
    duration: ' 1 months',
    overview: 'Koa Cafe aimed to increase customer footfall and promote their new offers, such as seasonal discounts and combo deals. They sought our expertise in paid advertising, social media management, and content creation to achieve this goal.',
    objective: 'To increase customer footfall and promote new offers through effective digital marketing strategies.',
    challenges: [
      'Limited visibility in a competitive local market',
      'Lack of consistent and engaging content on social media platforms',
      'Difficulty in reaching the target audience effectively'
    ],
    strategy: {
      title: 'Strategy by Digi Spark',
      sections: [
        {
          title: 'Strategy Development',
          points: [
            'Conducted a thorough analysis of the cafe\'s target audience, including preferences, behaviors, and local demographics',
            'Defined clear goals for the campaign, focusing on increasing walk-ins and building brand awareness'
          ]
        },
        {
          title: 'Content Creation',
          points: [
            'Designed visually appealing posts showcasing their new offers, menu highlights, and the cafe\'s cozy ambiance',
            'Created short videos featuring customer testimonials and behind-the-scenes glimpses of the cafe'
          ]
        },
        {
          title: 'Social Media Management',
          points: [
            'Established a consistent posting schedule across platforms like Instagram and Facebook',
            'Engaged with followers through interactive polls, contests, and prompt responses to queries'
          ]
        },
        {
          title: 'Paid Advertising',
          points: [
            'Ran targeted ad campaigns on Facebook and Instagram focusing on the local audience',
            'Highlighted their seasonal offers with eye-catching visuals and persuasive ad copy',
            'Optimized campaigns weekly to ensure maximum ROI and engagement'
          ]
        }
      ]
    },
    results: [
      'Footfall grew by 35% within the first month of the campaign',
      'Weekend visits surged, driven by promotional posts and ads',
      'Social media followers increased by 50% within one month',
      'Engagement rates doubled due to high-quality content and interactive posts',
      'The cafe became a local favorite, with more mentions and reviews on social platforms',
      'Positive word-of-mouth contributed to sustained growth beyond the campaign period'
    ],
    conclusion: 'By leveraging paid advertising, effective social media management, and engaging content creation, Digi Spark helped Koa  Cafe achieve their goals and establish a strong presence in the local market. This case demonstrates the power of a well-rounded digital marketing strategy in driving tangible business results.',
    images: [
      'https://www.koacafe.in/images/img/img4.jpg' // Make sure to add the cafe's image to your public folder
    ]
  };

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