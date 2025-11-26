"use client";

import { useRouter } from "next/navigation";
import css from "./Home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <main className={css.home}>
      <div className={css.contentWrapper}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.description}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button
          className={css.button}
          type="button"
          onClick={() => router.push("/catalog")}
        >
          View Catalog
        </button>
      </div>
    </main>
  );
};

export default Home;
