import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingPointsProps {
  points: string[];
  className?: string;
}

const ScrollingPoints: React.FC<ScrollingPointsProps> = ({ points, className }) => {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="whitespace-nowrap text-2xl font-bold text-[#FF3D00] mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {point}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollingPoints;
