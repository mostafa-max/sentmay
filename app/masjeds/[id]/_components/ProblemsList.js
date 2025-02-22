import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

export const ProblemsList = ({item}) => {
  const problems = useMemo(() => 
    item?.problems?.split(',') || [],
    [item]
  );
  return (
    <div className="bg-error/10 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-error">
        <FiAlertCircle className="w-6 h-6" />
        المشاكل المطلوب حلها
      </h2>
      <div className="flex flex-wrap gap-2">
        {problems.map((problem, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="badge badge-error badge-lg shadow-sm"
          >
            {problem.trim()}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
