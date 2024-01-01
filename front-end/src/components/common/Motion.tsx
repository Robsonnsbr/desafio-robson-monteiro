'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface MotionProps {
  children: React.ReactNode;
  motionKey: string;
}

function Motion({ children, motionKey }: MotionProps) {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, easing: 'ease' }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
