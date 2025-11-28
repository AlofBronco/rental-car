"use client";

import { fetchCarById } from "@/lib/api/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CarInfo.module.css";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Form/Form";
import CarInfoText from "@/components/CarInfoText/CarInfoText";

const CarInfoClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = () => {
    toast.promise(delay(500), {
      loading: "Saving...",
      success: <b>Successful booking!</b>,
      error: <b>Could not book the car.</b>,
    });
  };

  return (
    <main className={css.main}>
      {car && (
        <div className={css.infoWrapper}>
          <div className={css.imageFormWrapper}>
            <Image
              className={css.image}
              src={car?.img}
              alt={car.model}
              width={640}
              height={512}
            />
            <Form onSubmit={handleSubmit} />
          </div>
          <CarInfoText car={car} />
        </div>
      )}
      {isLoading && <p className={css.message}>Loading...</p>}
      {error && <p className={css.message}>There is an error</p>}
      <Toaster />
    </main>
  );
};

export default CarInfoClient;
