import axios from "axios";

export const generateAd = async (data) => {
  const res = await axios.post("http://localhost:5000/api/generate", data);
  return res.data;
};
