import axios from "axios";

const instance = axios.create({
  // got api link from functions in firebase console
  baseURL: "https://us-central1-clone-2d1c5.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-2d1c5/us-central1/api",
});

export default instance;
