// app/artisans/[id]/page.jsx
"use client";
import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useGetItem from '@/app/hooks/useGetItem';
import BackButton from '@/app/components/ButtonBack';
import { ProfileImage } from './_components/ProfileImage';
import { ArtisanDetails } from './_components/ArtisanDetails';
import { ExperienceList } from './_components/ExperienceList';
import { BioSection } from './_components/BioSection';
import { ErrorState } from '@/app/components/states/ErrorState';
import { LoadingState } from '@/app/components/states/LoadingState';

 

const ArtisanPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = useMemo(() => params.id, [params]);
  
  const { isLoading, data: artisan, error } = useGetItem(`artisans`, id);
  const experienceList = useMemo(() => 
    artisan?.experience?.split(',') || [],
    [artisan]
  );

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!artisan) return null;

  return (
    <div >
      <div className="container mx-auto px-4 py-12 relative z-10">
        <BackButton router={router} />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ProfileImage image={artisan.picture} name={artisan.name} />
          
          <div className="space-y-8">
            <ArtisanDetails artisan={artisan} />
            <ExperienceList experiences={experienceList} />
            <BioSection bio={artisan.bio} name={artisan.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanPage;