// app/artisans/[id]/_components/ExperienceList.jsx
'use client';
import { motion } from 'motion/react';
import { FiAlertCircle } from 'react-icons/fi';

export const ExperienceList = ({ experiences }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="bg-primary/10 p-8 rounded-2xl shadow-md"
  >
    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
      <FiAlertCircle className="w-6 h-6" />
      الخبرات والمهارات
    </h2>
    <ul className="space-y-3">
      {experiences.map((experience, index) => (
        <li key={index} className="flex items-start gap-2 text-lg">
          <span className="text-secondary mt-1">•</span>
          {experience.trim()}
        </li>
      ))}
    </ul>
  </motion.div>
);