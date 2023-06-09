import * as yup from "yup";

const AddPetValidationSchema = yup.object().shape({
  breed: yup.string().required(),
  comments: yup.string().required(),
  dateOfBirth: yup.string().required(),
  name: yup.string().required(),
  photo: yup.mixed().required(),
});

export default AddPetValidationSchema;
