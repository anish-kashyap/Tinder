import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-cloneanish.herokuapp.com",
});

export default instance;
