// app/artisans/[id]/_components/BioSection.jsx
'use client';
import { motion } from 'motion/react';

export const BioSection = ({ bio, name }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="bg-base-200 p-8 rounded-2xl shadow-md"
  >
    <h2 className="text-2xl font-semibold mb-4">نبذة عن {name}</h2>
    <p className="leading-relaxed text-lg">{bio}</p>
  </motion.div>
);