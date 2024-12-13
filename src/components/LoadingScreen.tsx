import React from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.img 
          src="/Loading.svg"
          alt="DigiSpark Loading"
           className="h-72 md:h-96 lg:h-[500px] w-auto mb-8"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-golden text-3xl md:text-3xl"
        >
          Where Ideas Spark into Action.
        </motion.div>
      </div>
    </div>
  );
} 