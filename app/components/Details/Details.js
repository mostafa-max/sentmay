import React from 'react'
import {motion} from "motion/react"

function Details({name,children}) {
  return (
    <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-base-200 p-8 rounded-2xl shadow-md space-y-6"
            >
              <h1 className="text-4xl font-bold text-primary">{name}</h1>
              <div className="grid grid-cols-2 gap-4">{children}</div>
              
            </motion.div>

         
          </div>
  )
}

export default Details