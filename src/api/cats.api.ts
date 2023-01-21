import { Cat, CatImageResponse } from "../utils/types";
import axiosInstance from "./axios";

export const getCats = async (): Promise<Cat[]> => {
  try {
    const res = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/breeds`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getDiscoverCatsImages = async (breedImagesIds: string[]): /* Promise<string[]> */ Promise<any> => {
  const requests = breedImagesIds.map((imgId) => axiosInstance.get(`${import.meta.env.VITE_API_URL}/images/${imgId}`));
  try {
    const res = await Promise.all(requests);
    return res.map((r) => r.data);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCatImages = async (breedId: string): Promise<CatImageResponse[]> => {
  try {
    const res = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/images/search?limit=9&breed_ids=${breedId}`)
    return res.data
  } catch (error: any) {
    throw new Error(error.message);
  }
};
