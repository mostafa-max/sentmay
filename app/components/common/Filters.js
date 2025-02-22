"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Filters({ categories, value, onCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full rounded-full max-w-md form-control text-base-content"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Selected Value (Always Visible) */}
      <div className="select bg-base-100 shadow-md p-2 cursor-pointer">
        {value ? value : "الكل"}
      </div>

      {/* Dropdown Options (Appear on Hover) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-full w-full bg-base-100 shadow-lg rounded-md z-10"
          >
            {/* "الكل" Option (Reset Filter) */}
            {(value&&value!=="الكل")&&<li
              className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition"
              onClick={() => onCategoryChange("")}
            >
              الكل
            </li>}

            {/* Dynamic Categories */}
            {categories.map((cat) => (
              (value!==cat)&&<li
                key={cat}
                className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition"
                onClick={() => {onCategoryChange(cat);setIsOpen(false)}}
              >
                {cat}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
