"use client";

import BackButton from "@/app/components/ButtonBack";
import { ImageSlider } from "@/app/components/Details/ImageSlider";
import { ErrorState } from "@/app/components/states/ErrorState";
import { LoadingState } from "@/app/components/states/LoadingState";
import ShopDetails from "./_components.js/ShopDetails";
import Status from "./_components.js/Status";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import useGetItem from "@/app/hooks/useGetItem";


const ShopPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = useMemo(() => params.id, [params]);
  const { isLoading, data: shop, error } = useGetItem(`shops`, id);
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!shop) return null;

  return (
    <div >
      <div className="container mx-auto px-4 py-12 relative z-10">
        <BackButton router={router} />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ImageSlider item={shop}/>
          <div className="space-y-8">
            <ShopDetails shop={shop}/>
            <Status shop={shop} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;