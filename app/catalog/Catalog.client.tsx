"use client";

import CarsList from "@/components/CarsList/CarsList";
import Filters from "@/components/Filters/Filters";
import { fetchBrands, fetchCars } from "@/lib/api/api";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import css from "./Catalog.module.css";
import { useStore } from "@/lib/store/store";

const CatalogClient = () => {
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: () => fetchBrands(),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const filters = useStore((state) => state.filters);
  const setFilters = useStore((state) => state.setFilters);

  const perPage = 12;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [
      "cars",
      perPage,
      filters?.brand,
      filters?.price,
      filters?.from,
      filters?.to,
    ],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await fetchCars({
        page: pageParam,
        perPage,
        brand: filters?.brand,
        price: filters?.price,
        minMileage: filters?.from,
        maxMileage: filters?.to,
      });
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.totalPages === 0) return undefined;

      return lastPage.totalPages !== Number(lastPage.page)
        ? Number(lastPage.page) + 1
        : undefined;
    },
    refetchOnMount: false,
  });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  return (
    <main className={css.main}>
      {brands && <Filters brands={brands} onClick={setFilters} />}
      {isLoading && <p className={css.message}>Loading...</p>}
      {error && <p className={css.message}>There is an error</p>}
      {cars && <CarsList cars={cars} />}
      {cars.length <= 0 && !isLoading && (
        <p className={css.message}>
          No cars to show. Please choose another filter
        </p>
      )}
      {hasNextPage && (
        <button
          className={css.paginationButton}
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </main>
  );
};

export default CatalogClient;
