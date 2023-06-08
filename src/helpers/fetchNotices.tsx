import axios from "axios";
axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDgwYjA4OWFiMDM3YjliOTlhZWQxOWIiLCJlbWFpbCI6InNAbWFpbC5jb20iLCJpYXQiOjE2ODYxNTk5Nzh9.p9DROsLz8GCvzdId5XAYyvNW7Y3cPvblTC_WKgCcVRM";

const config = {
  headers: {
    authorization: `${TOKEN}`,
  },
};

export const getNoticesByCategory = async (category: string) => {
  const response = await axios.get(
    `/api/notices/byCategory?category=${category}`
  );
  return response;
};

export const getNoticesByID = async (id: string) => {
  const response = await axios.get(`/api/notice/${id}`);
  return response;
};

export const getNoticesByTitle = async (title: string) => {
  const response = await axios.get(`/api/notices/byTitle?title=${title}`);
  return response;
};

export const updateFavouriteList = async (id: string) => {
  const response = await axios.patch(
    `/api/user/favourite`,
    { noticeId: id },
    config
  );
  return response;
};

export const getFavouriteList = async () => {
  const response = await axios.get(`/api/privat-notices/favourite`, config);
  return response;
};

export const getCurrentUser = async () => {
  const response = await axios.get("/current",config)
  return response
}