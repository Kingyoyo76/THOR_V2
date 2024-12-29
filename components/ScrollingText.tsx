'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const messages = [
  'Fortify your IDENTITY ACCESS',
  'Optimize your GOVERNANCE, RISK & COMPLIANCE',
  'Streamline your ENTERPRISE ARCHITECTURE'
];

export default function ScrollingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 overflow-hidden">
      <div className="absolute w-full">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 100, damping: 15 },
            opacity: { duration: 0.5 }
          }}
          className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF3D00]"
        >
          {messages[currentIndex]}
        </motion.div>
      </div>
    </div>
  );
}
