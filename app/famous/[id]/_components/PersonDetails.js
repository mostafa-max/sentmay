import DetailItem from '@/app/components/Details/DetailItem'
import Details from '@/app/components/Details/Details'
import React from 'react'
import { FiCalendar, FiCrosshair, FiStar } from 'react-icons/fi'

function PersonDetails({person}) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ar-EG', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };
    const calculateLifespan = () => {
        if (!person?.birth_date || !person?.die_date) return null;
        const birth = new Date(person.birth_date);
        const death = person.die_date?new Date(person.die_date):0
        const age = death!==0? death.getFullYear() - birth.getFullYear():new Date().getFullYear() - birth.getFullYear()
        return `${age} سنة`;
      };
  return (
    <Details name={person.name}>
                <DetailItem 
                  icon={<FiCalendar />}
                  label="تاريخ الميلاد"
                  value={formatDate(person.birth_date)}
                />
                
               {person.die_date&& <DetailItem 
                  icon={<FiCrosshair />}
                  label="تاريخ الوفاة"
                  value={formatDate(person.die_date)}
                />}
                
                <DetailItem 
                  icon={<FiStar />}
                  label="العمر"
                  value={calculateLifespan()}
                />

           </Details>
  )
}

export default PersonDetails