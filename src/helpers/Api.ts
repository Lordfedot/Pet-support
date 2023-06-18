import axios from "axios";
import { NewPet } from "../interfaces/NewPet";
axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";
export const updateUser = async (fieldName: string, body: string | File) => {

  let formData = new FormData();
  if (body) {
    formData.append(`${fieldName}`, body);
  }
  try {
    const response = await axios.patch("/api/user", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const AddPetForUser = async ({
  breed,
  comments,
  dateOfBirth,
  name,
  photo,
}: NewPet) => {
  let formData = new FormData();
  try {
    if (photo) {
      formData.append("photo", photo);
    }
    formData.append("name", name);
    formData.append("breed", breed);
    formData.append("comments", comments);
    formData.append("dateOfBirth", dateOfBirth);

    const response = await axios.post("/api/pets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
