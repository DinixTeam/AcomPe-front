import axios from "axios";
const http = axios.create({
  baseURL: "https://acompe.herokuapp.com/",
});
export default http;