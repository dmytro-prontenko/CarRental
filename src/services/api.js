import axios from "axios";

const BASE_URL = "https://654be5085b38a59f28efdc40.mockapi.io/adverts";
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const getCars = async (config) => {
  const { data } = await $instance.get('cars', {
    params: {
      ...config,
    }});
  return data;
};
