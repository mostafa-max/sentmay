import { formatTimeForDisplay } from '@/app/helper/helper';
import { useShopStatus } from '@/app/hooks/useShopStatus';
import { motion,AnimatePresence } from 'motion/react'

function Status({shop}) {
    // const [currentTime, setCurrentTime] = useState(new Date());
    // // Update time every minute
    // useEffect(() => {
    //   const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    //   return () => clearInterval(timer);
    // }, []);
  
    // const isShopOpen = useMemo(() => {
    //   if (!shop) return false;
    //   const [openHour, openMinute] = shop.opening_time.split(':').map(Number);
    //   const [closeHour, closeMinute] = shop.closing_time.split(':').map(Number);
      
    //   const openTime = new Date();
    //   openTime.setHours(openHour, openMinute, 0);
      
    //   const closeTime = new Date();
    //   closeTime.setHours(closeHour, closeMinute, 0);
  
    //   // Handle closing time past midnight
    //   if (closeTime < openTime) closeTime.setDate(closeTime.getDate() + 1);
  
    //   return currentTime >= openTime && currentTime <= closeTime;
    // }, [shop, currentTime]);

    const isShopOpen= useShopStatus(shop)
  return (
    <AnimatePresence mode='wait'>
    <motion.div
      key={isShopOpen ? 'open' : 'closed'}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`p-6 rounded-2xl ${
        isShopOpen 
          ? 'bg-success/10 text-success' 
          : 'bg-error/10 text-error'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full animate-pulse ${
          isShopOpen ? 'bg-success' : 'bg-error'
        }`} />
        <p className="text-xl font-semibold">
          {isShopOpen ? 'مفتوح الآن' : 'مغلق الآن'}
        </p>
      </div>
      {!isShopOpen && (
        <p className="mt-2 text-lg">
          سيتم فتح المحل في {formatTimeForDisplay(shop.opening_time)}
        </p>
      )}
    </motion.div>
  </AnimatePresence>
  )
}

export default Status