"use client";

import { Brand } from "@/types/brands";
import Select from "../Select/Select";
import css from "./Filters.module.css";
import FromTo from "../FromTo/FromTo";
import { type Filters } from "@/types/filters";
import { useStore } from "@/lib/store/store";
import { useEffect, useState } from "react";

interface FiltersProps {
  brands: Brand[];
  onClick: (filters: Filters | null) => void;
}

const Filters = ({ brands, onClick }: FiltersProps) => {
  const filters = useStore((state) => state.filters);

  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const prices = ["30", "40", "50", "60", "70", "80", "90", "100"];

  return (
    <div className={css.filters}>
      <Select
        label="Car brand"
        value={localFilters?.brand}
        onChange={(val) => setLocalFilters({ ...localFilters, brand: val })}
        options={brands}
        placeholder="Choose a brand"
      />

      <Select
        label="Price/ 1 hour"
        value={localFilters?.price}
        onChange={(val) => setLocalFilters({ ...localFilters, price: val })}
        options={prices}
        placeholder="Choose a price"
      />

      <FromTo
        from={localFilters?.from}
        to={localFilters?.to}
        setFrom={(val) => setLocalFilters({ ...localFilters, from: val })}
        setTo={(val) => setLocalFilters({ ...localFilters, to: val })}
      />

      <button
        className={css.button}
        type="button"
        onClick={() => onClick(localFilters)}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
