'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface MotionProps {
  children: React.ReactNode;
}

function Motion({ children }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
