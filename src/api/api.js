const BASE_URL = "http://localhost:5000";
const API_URI = "/api/vacancy";

export const getData = (type, location) => {
  return fetch(BASE_URL + API_URI + `?${type}=${location}`)
    .then((res) => res.json())
    .catch((err) => {
      throw Error(err.message);
    });
};

export const getVacancy = (id) => {
  return fetch(BASE_URL + API_URI + `/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      throw Error(err.message);
    });
};
