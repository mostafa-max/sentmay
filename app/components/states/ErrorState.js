
'use client';
import { FiAlertCircle } from 'react-icons/fi';

export const ErrorState = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-error/10">
    <div className="text-error text-xl text-center p-6 rounded-xl">
      <FiAlertCircle className="inline-block mb-2 w-8 h-8" />
      <p>حدث خطأ: {error.message}</p>
    </div>
  </div>
);