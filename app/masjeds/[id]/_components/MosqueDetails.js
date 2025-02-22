// components/Mosque/MosqueDetails.js
import DetailItem from '@/app/components/Details/DetailItem';
import Details from '@/app/components/Details/Details';
import { FiMapPin, FiCalendar, FiCheck, FiArrowRight, FiX } from 'react-icons/fi';

export const MosqueDetails = ({ mosque }) => {
  return (
      <Details name={mosque.name}>
        <DetailItem icon={<FiMapPin />} label="العنوان" value={mosque.address} />
        <DetailItem icon={<FiCalendar />}  label="تاريخ الإضافة"
          value={` ${new Date(mosque.created_at).toLocaleDateString('ar-EG')}`} />
        <DetailItem icon={mosque.women?<FiCheck />:<FiX/>} label="قسم السيدات" 
          value={` ${mosque.women ? "متوفر" : "غير متوفر"}`} />
        {mosque.size && <DetailItem icon={<FiArrowRight />} label="الحجم" value={` ${mosque.size}`} />}
      </Details>
  );
};

