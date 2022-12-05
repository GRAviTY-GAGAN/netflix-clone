import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// what this does is that every time the request is made baseURL will be add

export default instance;
