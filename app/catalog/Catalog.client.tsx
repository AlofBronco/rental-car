"use client";

import CarsList from "@/components/CarsList/CarsList";
import Filters from "@/components/Filters/Filters";
import { fetchBrands } from "@/lib/api/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const CatalogClient = () => {
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: () => fetchBrands(),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  return (
    <main>
      {brands && <Filters brands={brands} />}
      <CarsList />
    </main>
  );
};

export default CatalogClient;
