import CarsList from "@/components/CarsList/CarsList";
import Filters from "@/components/Filters/Filters";

const CatalogClient = () => {
  return (
    <main>
      <Filters />
      <CarsList />
    </main>
  );
};

export default CatalogClient;
