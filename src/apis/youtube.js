import axios from "axios";

const KEY = "AIzaSyDOP_Cub7WwBoq_-W17Eu58MJ9YD7mJoyM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
