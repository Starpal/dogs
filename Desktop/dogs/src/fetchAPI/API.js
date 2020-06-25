import axios from 'axios';

const baseUrl = "https://dog.ceo/api"

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAllBreeds =() => {
  return axiosInstance.get("/breeds/list/all");
}

export const getBreedImages =(breedName) => {
    return axiosInstance.get(`/breed/${breedName}/images`);
  }

 