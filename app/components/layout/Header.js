'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

// Import React Icons
import { FaHome, FaStore, FaMapMarkerAlt, FaMosque, FaUserTie, FaInfoCircle, FaHandsHelping, FaHeart } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import Image from 'next/image'


export const Header = () => {
  const navLinks = [
    { name: 'الصفحةُ الرئيسية', path: '/', icon: <FaHome /> },
    { name: 'المحترفين', path: '/artisans', icon: <FaHandsHelping /> },
    { name: 'المحِلات', path: '/shops', icon: <FaStore /> },
    { name: 'الأماكِن', path: '/places', icon: <FaMapMarkerAlt /> },
    { name: 'المساجِد', path: '/masjeds', icon: <FaMosque /> },
    { name: 'شخصيات عامة', path: '/famous', icon: <FaUserTie /> },
    { name: 'حَول', path: '/about', icon: <FaInfoCircle /> },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header

      className="bg-base-200/60 shadow-lg backdrop-blur-md fixed left-0 right-0 top-0 z-50"
    >
      <div className="navbar max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="navbar-start   relative">
          
          <motion.div 
      whileHover={{ scale: 1.1 }} 
      className="flex items-center gap-2"
    >
      <Link href="/" aria-label='سنتماي - الموقع الرسمي' className='px-4 h-14 flex items-center relative '>
        <Image src={`/${theme}Logo.png`} height={80}  width={80} alt='سنتماي - الموقع الرسمي' priority/>
      </Link>
    </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <motion.ul className="menu menu-horizontal gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {navLinks.map((link) => (
              <motion.li key={link.name}>
                <Link href={link.path} className="hover:text-accent transition-colors  text-base-content inline-flex items-center gap-2">
                  <motion.span whileHover={{ scale: 1.05 }} className="flex items-center font-bold gap-1">
                    {link.icon} {link.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="navbar-end gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme}/>
          <button className="btn btn-ghost lg:hidden" onClick={toggleMobileMenu}>
            <HiMenu className="h-6 w-6 text-base-content" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -100 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className={`lg:hidden fixed top-[72px] left-0 w-full bg-base-100 shadow-lg p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
>
  <motion.ul
    className="menu w-full space-y-2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
  >
    {navLinks.map((link) => (
      <motion.li
        key={link.name}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 hover:bg-base-200 rounded-lg"
      >
        <Link
          href={link.path}
          className="hover:text-accent transition-colors text-base-content font-bold flex items-center gap-2"
          onClick={toggleMobileMenu}
        >
          {link.icon} {link.name}
        </Link>
      </motion.li>
    ))}
  </motion.ul>
</motion.div>

    </header>
  )
}
