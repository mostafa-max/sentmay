"use client";

import BackButton from "@/app/components/ButtonBack";
import { ImageSlider } from "@/app/components/Details/ImageSlider";
import { ErrorState } from "@/app/components/states/ErrorState";
import { LoadingState } from "@/app/components/states/LoadingState";
import PersonDetails from "./_components/PersonDetails";
import Achivements from "./_components/Achivements";
import { Bio } from "@/app/components/Details/Bio";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import useGetItem from "@/app/hooks/useGetItem";
const FamousPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = useMemo(() => params.id, [params]);
  const { isLoading, data: person, error } = useGetItem(`famous`, id);
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!person) return null;
  return (
    <div >
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <BackButton router={router} />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ImageSlider item={person}/>
          <div className="space-y-8">
            <PersonDetails person={person}/>
            <Bio label="السيرة الذاتية" bio={person.bio}/>
            <Achivements person={person}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FamousPage;