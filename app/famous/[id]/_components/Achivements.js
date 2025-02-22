import React, { useMemo } from 'react'
import {motion} from "motion/react"
import { FiStar } from 'react-icons/fi';
function Achivements({person}) {
    const achievementsList = useMemo(() => 
        person?.achievements?.split(',') || [],
        [person]
      );
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="bg-primary/10 p-8 rounded-2xl shadow-md"
  >
    <div className="flex items-center gap-3 mb-4">
      <FiStar className="w-6 h-6 text-primary" />
      <h2 className="text-2xl font-semibold">الإنجازات البارزة</h2>
    </div>
    <ul className="space-y-3">
      {achievementsList.map((achievement, index) => (
        <li 
          key={index}
          className="flex items-start gap-2 text-lg"
        >
          <span className="text-secondary mt-1">•</span>
          {achievement.trim()}
        </li>
      ))}
    </ul>
  </motion.div>
  )
}

export default Achivements