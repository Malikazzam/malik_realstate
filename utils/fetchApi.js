import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ae25b55148msh6116159982b2fa8p125fc3jsn447f31d28820",
    },
  });

  return data;
};
