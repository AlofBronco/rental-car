"use client";

import { Brand } from "@/types/brands";
import Select from "../Select/Select";
import { useState } from "react";
import css from "./Filters.module.css";
import FromTo from "../FromTo/FromTo";

interface FiltersProps {
  brands: Brand[];
}

const Filters = ({ brands }: FiltersProps) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const prices = ["30", "40", "50", "60", "70", "80", "90", "100"];

  return (
    <div className={css.filters}>
      <Select
        label="Car brand"
        value={brand}
        onChange={setBrand}
        options={brands}
        placeholder="Choose a brand"
      />

      <Select
        label="Price/ 1 hour"
        value={price}
        onChange={setPrice}
        options={prices}
        placeholder="Choose a price"
      />

      <FromTo from={from} to={to} setFrom={setFrom} setTo={setTo} />
    </div>
  );
};

export default Filters;
