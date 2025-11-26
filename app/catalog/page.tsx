import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { fetchBrands, fetchCars } from "@/lib/api/api";
import { Brand } from "@/types/brands";

const Catalog = async () => {
  const queryClient = new QueryClient();

  const page = 1;
  const brand: Brand | null = null;

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["cars", page, brand],
    queryFn: () => fetchCars(),
    initialPageParam: 1,
  });

  await queryClient.prefetchQuery({
    queryKey: ["brands"],
    queryFn: () => fetchBrands(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
};

export default Catalog;
