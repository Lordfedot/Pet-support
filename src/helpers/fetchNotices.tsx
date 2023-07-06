import axios from "axios";
import { NewNotice } from "../interfaces/NewNotice";

axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";

export const getNoticesByCategory = async (category: string) => {
  const response = await axios.get(
    `/api/notices/byCategory?category=${category}`
  );
  return response.data.response;
};

export const getNoticesByID = async (id: string) => {
  const response = await axios.get(`/api/notice/${id}`);
  return response.data.response;
};

export const getNoticesByTitle = async (title: string) => {
  const response = await axios.get(`/api/notices/byTitle?title=${title}`);
  return response.data.response;
};

export const updateFavouriteList = async (id: string) => {
  const response = await axios.patch(`/api/user/favourite`, { noticeId: id });
  return response.data.response;
};

export const getFavouriteList = async () => {
  const response = await axios.get(`/api/privat-notices/favourite`);
  return response.data.response;
};

export const getPrivatList = async () => {
  const response = await axios.get(`/api/privat-notices`);
  return response.data.response;
};

export const getCurrentUser = async () => {
  const response = await axios.get("/current");
  return response.data.user;
};

export const addNotice = async ({
  title,
  category,
  petName,
  breed,
  sex,
  dateOfBirth,
  avatar,
  place,
  price,
  commentary,
}: NewNotice) => {
  let formData = new FormData();

  try {
    if (avatar) {
      formData.append("avatar", avatar);
    }
    formData.append("title", title);
    formData.append("category", category);
    formData.append("petName", petName);
    formData.append("breed", breed);
    formData.append("sex", sex);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("place", place);
    formData.append("price", price);
    formData.append("commentary", commentary);
    const response = await axios.post("/api/notices", formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotice = async (id: string) => {
  const response = await axios.delete(`/api/notice/${id}`);
  return response.data.response;
};