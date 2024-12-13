import React from 'react';
import { motion } from 'framer-motion';

export function CaseStudy() {
  const study = {
    title: 'Brand Awareness and Membership Growth for SFW The Gym',
    category: 'Brand Strategy & Paid Advertising',
    client: 'SFW The Gym',
    duration: '1 month',
    overview: 'SFW The Gym is a local fitness center known for its advanced facilities, expert trainers, and community-oriented approach. The gym sought to increase brand awareness and attract new customers through a targeted paid advertising strategy.',
    objective: 'To enhance visibility and drive new memberships using optimized paid advertising campaigns.',
    challenges: [
      'Limited local recognition despite high-quality offerings',
      'Strong competition from other fitness centers',
      'Maximizing ROI within a limited ad budget'
    ],
    strategy: {
      title: 'Strategy by Digi Spark',
      sections: [
        {
          title: 'Paid Advertising Campaigns',
          subsections: [
            {
              title: 'Social Media Ads',
              points: [
                'Designed eye-catching campaigns on Facebook and Instagram via Meta Business Manager',
                'Targeted local demographics, showcasing the gym\'s facilities, personalized training, and success stories',
                'Utilized carousel ads and CTAs like "Sign Up Today" or "Book Your Free Trial"'
              ]
            },
            {
              title: 'Google Ads',
              points: [
                'Focused on high-intent keywords such as "best gym near me"',
                'Created display ads emphasizing promotional offers and retargeted website visitors'
              ]
            }
          ]
        },
        {
          title: 'Landing Page Optimization',
          points: [
            'Developed a mobile-friendly landing page with clear CTAs like "Claim Your Free 7-Day Pass"',
            'Highlighted key gym features and made trial sign-ups seamless'
          ]
        },
        {
          title: 'Promotional Offers',
          points: [
            'Ran limited-time deals, including discounted first-month memberships and referral bonuses, to encourage sign-ups'
          ]
        },
        {
          title: 'Performance Monitoring',
          points: [
            'Conducted A/B testing on ad creatives and targeting',
            'Analyzed metrics such as CTR and cost per acquisition (CPA) to refine campaigns'
          ]
        }
      ]
    },
    results: [
      'Brand Awareness: Paid campaigns reached over 50,000 local users, significantly increasing visibility',
      'Membership Growth: New sign-ups rose by 60%, driven by promotions and precise targeting',
      'Cost Efficiency: Optimized ads reduced CPA by 25%',
      'Engagement: Website traffic surged by 80%, with a significant rise in inquiries and trial bookings'
    ],
    conclusion: 'Digi Spark\'s data-driven advertising strategy enabled SFW The Gym to effectively enhance its brand presence and grow its membership base, establishing the gym as a preferred fitness destination in the local community.',
    images: [
      'https://content3.jdmagicbox.com/comp/vadodara/f3/0265px265.x265.230101233148.b8f3/catalogue/sfw-the-gym-sama-savali-road-sama-vadodara-fitness-centres-BCzjAXnch3.jpg'
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
                  {section.subsections ? (
                    section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h4 className="text-golden font-medium mb-2">{subsection.title}</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          {subsection.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
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