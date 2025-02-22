// components/Footer.tsx
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative flex flex-col sm:flex-row items-center gap-4 justify-center font-bold bg-base-300 text-base-content p-4"
    >
        <p>جميع الحقوق محفوظة | سنتماي &copy; {new Date().getFullYear()}</p>
      
    </motion.footer>
  )
}