import DetailItem from '@/app/components/Details/DetailItem'
import Details from '@/app/components/Details/Details'
import { formatTimeForDisplay } from '@/app/helper/helper'
import React from 'react'
import { FiClock, FiMapPin, FiShoppingBag } from 'react-icons/fi'

function ShopDetails({shop}) {

  return (
    <Details name={shop.name}>
        <DetailItem icon={<FiMapPin/>} label="العنوان" value={shop.address}/>
        <DetailItem icon={<FiShoppingBag  />} label="النوع " value={shop.category}/>
        <DetailItem icon={<FiMapPin/>} label="العنوان" value={shop.address} />
        <DetailItem icon={<FiClock  />} label="أوقات العمل" value={`${formatTimeForDisplay(shop.opening_time)} -
            ${formatTimeForDisplay(shop.closing_time)}`} />

    </Details>
  )
}

export default ShopDetails