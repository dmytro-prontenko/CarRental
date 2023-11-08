import axios from "axios";

const BASE_URL = 'https://654be5085b38a59f28efdc40.mockapi.io/adverts/cars';
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const getCars = async () => {
  const { data } = await $instance.get();
  return data;
};