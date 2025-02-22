// app/artisans/[id]/_components/ProfileImage.jsx
'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FiBriefcase, FiCameraOff } from 'react-icons/fi';

export const ProfileImage = ({ image, name }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-base-200"
  >
    {image ? (
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-4xl">
        <FiCameraOff />
      </div>
    )}
  </motion.div>
);