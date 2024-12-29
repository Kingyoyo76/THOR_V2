'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Rocket, DollarSign, LayoutGrid, Shield, Scale } from 'lucide-react';

interface Point {
  text: string;
  icon: React.ReactNode;
}

interface ScrollingPointsProps {
  className?: string;
}

const ScrollingPoints: React.FC<ScrollingPointsProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const points: Point[] = [
    { text: "Expand your IT team", icon: <Users className="w-6 h-6 text-[#FF3D00]" /> },
    { text: "Accelerate project delivery", icon: <Rocket className="w-6 h-6 text-[#FF3D00]" /> },
    { text: "Reduce operational costs", icon: <DollarSign className="w-6 h-6 text-[#FF3D00]" /> },
    { text: "Streamline your ENTERPRISE ARCHITECTURE", icon: <LayoutGrid className="w-6 h-6 text-[#FF3D00]" /> },
    { text: "Fortify your IDENTITY ACCESS", icon: <Shield className="w-6 h-6 text-[#FF3D00]" /> },
    { text: "Optimize your GOVERNANCE, RISK & COMPLIANCE", icon: <Scale className="w-6 h-6 text-[#FF3D00]" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 4000); // 4 seconds transition

    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <div className={`relative h-12 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full flex items-center justify-center gap-3 text-2xl font-bold text-[#FF3D00]"
        >
          {points[currentIndex].icon}
          {points[currentIndex].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ScrollingPoints;
