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

export const getAllBreeds = async() => {
  return await axiosInstance.get('/breeds/list/all');
}

export const getBreedImages = async(breedName) => {
    return await axiosInstance.get(`/breed/${breedName}/images`);
  }

 