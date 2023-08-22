import axios from "axios";

const newRequest = axios.create({
  //Change this to your backend api url
  baseURL: "https://gigkart-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
