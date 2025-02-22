// app/artisans/[id]/_components/ArtisanDetails.jsx
'use client';
import { motion } from 'motion/react';
import { FiBriefcase, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export const ArtisanDetails = ({ artisan }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-base-200 p-8 rounded-2xl shadow-md space-y-6"
  >
    <h1 className="text-4xl font-bold text-primary">{artisan.name}</h1>
    <div className="space-y-4">
      <DetailItem icon={<FiBriefcase />} label="التخصص" value={artisan.category} />
      <DetailItem icon={<FiMapPin />} label="الموقع" value={artisan.location} />
      <DetailItem icon={<FiPhone />} label="الهاتف" value={artisan.phone} />
      <DetailItem icon={<FiMail />} label="البريد الإلكتروني" value={artisan.email} />
    </div>
  </motion.div>
);

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <span className="text-secondary text-xl">{icon}</span>
    <p className="text-lg">
      <span className="font-medium">{label}:</span> {value}
    </p>
  </div>
);