import { Brand } from "@/types/brands";
import axios from "axios";
axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = async () => {
  try {
  } catch {}
};

export const fetchCarById = async () => {
  try {
  } catch {}
};

export const fetchBrands = async (): Promise<Brand[]> => {
  try {
    const res = await axios.get<Brand[]>("/brands");
    return res.data;
  } catch {
    throw new Error("Error fetching brands");
  }
};
