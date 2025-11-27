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
  const perPage = 12;
  const brand: Brand | undefined = undefined;
  const price: string | undefined = undefined;
  const minMileage: string | undefined = undefined;
  const maxMileage: string | undefined = undefined;

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["cars", perPage, brand, price, minMileage, maxMileage],
    queryFn: () =>
      fetchCars({ page, perPage, brand, price, minMileage, maxMileage }),
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
