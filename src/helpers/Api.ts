import axios from "axios";
import { NewPet } from "../interfaces/NewPet";
axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";

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

    const response = await axios.post(
      "/api/pets",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {console.log(error);
  }
};




