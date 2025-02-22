import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../LoadingSpinner';
import { CardSkeleton } from './Card'; // Import the skeleton component

// Lazy load the Card component
const Card = dynamic(() => import('./Card'), {
  suspense: true,
});

export default function List({ items, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => ( // Show 6 skeletons while loading
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!items?.length) {
    return <div className="text-center py-8">لم يتم العثور على شئ</div>;
  }

  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => <CardSkeleton key={index} />)}
      </div>
    }>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Suspense>
  );
}
