import DetailItem from '@/app/components/Details/DetailItem'
import Details from '@/app/components/Details/Details'
import { formatDate } from '@/app/helper/helper'
import React from 'react'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

function PlaceDetails({place}) {
  return (
    <Details name={place.name}>
            <DetailItem 
                icon={<FiBook />}
                label="نوع المرفق"
                value={place.category}
            />
            
            <DetailItem 
                icon={<FiMapPin />}
                label="العنوان"
                value={place.address}
            />
            
            <DetailItem
                icon={<FiCalendar />}
                label="تاريخ الإضافة"
                value={formatDate(place.created_at)}
            />
    </Details>
  )
}

export default PlaceDetails