// components/Mosque/ImamSection.js
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';

export const ImamSection = ({ imam }) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-base-200 rounded-2xl shadow-md">
      {imam.picture ? (
        <div className="relative w-24 h-24">
          <Image
            src={imam.picture}
            alt="Imam"
            fill
            className="rounded-full object-cover border-2 border-primary"
          />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <FiUser className="w-10 h-10 text-primary" />
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold text-base-content">{imam.name}</h2>
        <p className="text-primary text-lg">إمام المسجد</p>
      </div>
    </div>
  );
};