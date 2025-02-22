"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useItems, useCats } from "../hooks/useData";
import List from "../components/common/List";
import Pagination from "../components/common/Pagination";
import SearchBar from "../components/common/SearchBar";
import Filters from "../components/common/Filters";

export default function ArtisansPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const page = Number(searchParams.get("page")) || 0;
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  //fetch items ans categories
  const { data, isLoading } = useItems("artisans", { search, category }, page);
  const { data: categories } = useCats("artisans");

  const updateURL = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value || value === 0) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const totalPages = Math.ceil((data?.total ?? 0) / 9);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:justify-evenly gap-4 items-center">
        <SearchBar
          value={search}
          onSearchChange={(value) => updateURL({ search: value, page: 0 })}
        />
        <Filters
          categories={categories}
          value={category}
          onCategoryChange={(value) => updateURL({ category: value, page: 0 })}
        />
      </div>

      <List items={data?.data} loading={isLoading} />
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPrevious={() => updateURL({ page: Math.max(0, page - 1) })}
          onNext={() => updateURL({ page: Math.min(totalPages - 1, page + 1) })}
          loading={isLoading}
        />
      )}
    </div>
  );
}
