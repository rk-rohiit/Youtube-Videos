import axios from "axios";
const KEY = "AIzaSyAL2oql0I6uDSWGGUfU2YjlAMEO8-0mWmE"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
