"use client";

import BackButton from "@/app/components/ButtonBack";
import { ImageSlider } from "@/app/components/Details/ImageSlider";
import PlaceDetails from "./_components/PlaceDetails";
import { LoadingState } from "@/app/components/states/LoadingState";
import { ErrorState } from "@/app/components/states/ErrorState";
import { Bio } from "@/app/components/Details/Bio";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import useGetItem from "@/app/hooks/useGetItem";

const PlacePage = () => {
  const router = useRouter();
  const params = useParams();
  const id = useMemo(() => params.id, [params]);
  
  const { isLoading, data: place, error } = useGetItem(`places`, id);

 

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!place) return null;

  return (
    <div >

      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <BackButton router={router} />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ImageSlider item={place} />
          <div className="space-y-8">
            <PlaceDetails place={place}/>
            <Bio bio={place.bio} label={`${getCategoryInfo(place.category).prefix} ${getCategoryInfo(place.category).name}`}/>
          </div>
        </div>
      </div>
    </div>
  );
};



const getCategoryInfo = (category) => {
    const categoryMap = {
      'مدارس': { prefix: 'معلومات عن', name: 'المدرسة' },
      'مستشفيات': { prefix: 'تفاصيل', name: 'المستشفى' },
      'مطاعم': { prefix: 'عن', name: 'المطعم' },
      'متاجر': { prefix: 'معلومات عن', name: 'المتجر' },
      'حدائق': { prefix: 'عن', name: 'الحديقة العامة' },
      'فنادق': { prefix: 'معلومات', name: 'الفندق' },
      'بنوك': { prefix: 'تفاصيل', name: 'البنك' },
      'صيدليات': { prefix: 'معلومات عن', name: 'الصيدلية' },
      'مراكز_تجارية': { prefix: 'عن', name: 'المركز التجاري' },
    };
  
    return categoryMap[category] || { prefix: 'معلومات', name: 'عن المكان' };
  };
export default PlacePage;