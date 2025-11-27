"use client";

import { Car } from "@/types/cars";
import css from "./CarsItem.module.css";
import Image from "next/image";
import { useState } from "react";

interface CarsItemProps {
  car: Car;
}

const CarsItem = ({ car }: CarsItemProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <li className={css.item}>
      <div className={css.mainBlock}>
        <div className={css.imageWrapper}>
          <Image
            className={css.image}
            src={car.img}
            alt={car.model}
            width={276}
            height={268}
          />
          <button
            type="button"
            className={css.likeButton}
            onClick={() => setLiked(!liked)}
          >
            <svg
              className={`${css.likeIcon} ${liked ? css.active : ""}`}
              width="16"
              height="16"
            >
              <use
                href={`/sprite.svg#${liked ? "icon-heart-active" : "icon-heart"}`}
              ></use>
            </svg>
          </button>
        </div>
        <div className={css.carInfoWrapper}>
          <div className={css.infoWrapper}>
            <h2 className={css.info}>
              {car.brand} <span>{car.model}</span>, {car.year}
            </h2>
            <p className={css.price}>{`$${car.rentalPrice}`}</p>
          </div>
          <div className={css.carInfo}>
            <ul className={css.infoList}>
              <li>{car.address}</li>
              <li>{car.rentalCompany}</li>
              <li>{car.type}</li>
              <li>{car.mileage}</li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button"></button>
    </li>
  );
};

export default CarsItem;
