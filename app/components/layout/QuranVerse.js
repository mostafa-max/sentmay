// components/Layout/QuranVerse.js
import { motion } from 'framer-motion';

export const QuranVerse = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center text-2xl font-bold p-2 mt-4 relative"
  >
    وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا
    
  </motion.div>
);