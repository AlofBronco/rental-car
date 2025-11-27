import { Car } from "@/types/cars";
import CarsItem from "../CarsItem/CarsItem";
import css from "./CarsList.module.css";

interface CarsListProps {
  cars: Car[];
}

const CarsList = ({ cars }: CarsListProps) => {
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarsList;
