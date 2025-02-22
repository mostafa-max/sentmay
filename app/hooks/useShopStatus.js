import React, { useEffect, useMemo, useState } from 'react'
export const useShopStatus = (shop)=>{
    const [currentTime, setCurrentTime] = useState(new Date());
    // Update time every minute
    useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 60000);
      return () => clearInterval(timer);
    }, []);
  
    const isShopOpen = useMemo(() => {
      if (!shop) return null;
      const [openHour, openMinute] = shop.opening_time.split(':').map(Number);
      const [closeHour, closeMinute] = shop.closing_time.split(':').map(Number);
      
      const openTime = new Date();
      openTime.setHours(openHour, openMinute, 0);
      
      const closeTime = new Date();
      closeTime.setHours(closeHour, closeMinute, 0);
  
      // Handle closing time past midnight
      if (closeTime < openTime) closeTime.setDate(closeTime.getDate() + 1);
  
      return currentTime >= openTime && currentTime <= closeTime;
    }, [shop, currentTime]);

    return isShopOpen;
}