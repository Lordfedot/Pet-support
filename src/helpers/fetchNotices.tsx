import axios from "axios";
axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";

export const getNoticesByCategory = async (category: string) => {
  const responce = await axios.get(`/api/notices/byCategory?category=${category}`);
  return responce;
};

export const getNoticesByID = async (id: string) => {
  const responce = await axios.get(`/api/notice/${id}`);
  return responce;
};



export const getNoticesByTitle = async (title: string) => {
  const responce = await axios.get(`/api/notices/byTitle?title=${title}`);
  return responce;
};