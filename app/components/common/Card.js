import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import PlaceholderImage from './Placeholder';
import { useShopStatus } from '@/app/hooks/useShopStatus';

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.03, boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)' },
  exit: { opacity: 0, scale: 0.9 }
};

export default function Card({ item }) {
  const pathname = usePathname();
  const isShopOpen =useShopStatus(pathname==="/shops"?item:null);
  const openStyle="mt-2 inline-block rounded-full border-success border-2 bg-success/10 font-semibold px-3 py-1 text-sm text-success"
  const closeStyle="mt-2 inline-block rounded-full border-error border-2 bg-error/10 font-semibold px-3 py-1 text-sm text-error"
  return (
    <motion.article
      variants={CARD_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative h-full overflow-hidden rounded-xl bg-card shadow-sm transition-all"
    >
      <Link
        href={`${pathname}/${item.id}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {/* Image Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-muted/50">
          {item.picture ? (
            <Image
              src={item.picture.split(',')[0]}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          ) : (
            <PlaceholderImage/>
          )}
        </div>

        {/* Content */}
        <div className="p-4 bg-base-200/50">
          <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
            {item.name}
          </h3>
          
         <div className="flex flex-row-reverse gap-4 justify-between">
         {item.category && (
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-2 inline-block rounded-full border-primary border-2 bg-primary/10 font-semibold px-3 py-1 text-sm text-primary"
            >
              {item.category}
            </motion.span>
          )}
          {(isShopOpen!==null) && (
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={isShopOpen?openStyle:closeStyle}
            >
              {isShopOpen?"مفتوح":"مغلق"}
            </motion.span>
          )}
         </div>
        </div>
      </Link>
    </motion.article>
  );
}

// Skeleton Loader Component
export function CardSkeleton({ className='' }) {
  return (
    <div className={`h-full overflow-hidden rounded-xl bg-base-200/40  shadow-sm ${className}`}>
      <div className="aspect-square w-full animate-pulse bg-base-200/50" />
      
      <div className="p-4">
        <div className="h-6 w-3/4 animate-pulse rounded bg-base-200/50" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-base-200/50" />
      </div>
    </div>
  );
}
