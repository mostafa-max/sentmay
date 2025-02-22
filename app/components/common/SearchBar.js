"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "motion/react";

export default function SearchBar({ search, onSearchChange }) {
  
  return (
    <motion.div
      className="relative w-full max-w-md form-control text-base-content"
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Search Input with Icon */}
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث بالاسم "
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="input rounded-full w-full bg-base-100 shadow-md focus:outline-none focus:border-primary border-2 pl-10"
        />
        {/* Magnifying Glass Icon */}
        <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral text-xl" />
      </div>
    </motion.div>
  );
}
