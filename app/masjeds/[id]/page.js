"use client";

import BackButton from "@/app/components/ButtonBack";
import { QuranVerse } from "@/app/components/layout/QuranVerse";
import { ErrorState } from "@/app/components/states/ErrorState";
import { LoadingState } from "@/app/components/states/LoadingState";
import { MosqueDetails } from "./_components/MosqueDetails";
import { Bio } from "@/app/components/Details/Bio";
import { ImamSection } from "./_components/ImamSection";
import { ProblemsList } from "./_components/ProblemsList";
import { ImageSlider } from "@/app/components/Details/ImageSlider";
import { useParams, useRouter } from "next/navigation";
import useGetItem from "@/app/hooks/useGetItem";
import { useMemo } from "react";

const MosquePage = () => {
  const router = useRouter();
  const params = useParams();
  const id = useMemo(() => params.id, [params]); // Proper params handling
  const { isLoading, data: mosque, error } = useGetItem(`masjeds`,id);
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!mosque) return null;
  return (
    <div >
 
      <div className="container mx-auto px-4 py-12 relative z-10">
        <QuranVerse />
        <BackButton router={router} />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ImageSlider
            item={mosque}
          />
          <div className="space-y-8">
            <MosqueDetails mosque={mosque} />
            <Bio label="نبذة عن المسجد" bio={mosque.bio} />
            <ImamSection imam={{ name: mosque.imam_name, picture: mosque.imam_picture }} />
            <ProblemsList item={mosque} />
          </div>
        </div>
      </div>
    </div>
  );
};




export default MosquePage;
