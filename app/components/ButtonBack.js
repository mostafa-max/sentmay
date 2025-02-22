// components/Navigation/BackButton.js
'use client';

import { motion } from 'motion/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
// import { Howl } from 'howler';

const BackButton = () => {
  const router = useRouter();
  // const clickSound = new Howl({ src: ['/sounds/click.mp3'] });

  return (
    <motion.button
      onClick={() => {
        // clickSound.play();
        router.back();
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-8 p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/30 transition-all"
      aria-label="العودة للصفحة السابقة"
    >
      <FiChevronLeft className="w-6 h-6 transform mirror-rtl" />
    </motion.button>
  );
};

export default BackButton;