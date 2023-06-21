import * as yup from "yup";

const AddPetValidationSchema = yup.object().shape({
  breed: yup
    .string()
    .required("Breed required")
    .min(2, "Breed must be at least 2 characters")
    .max(16, "Breed cannot exceed 16 characters"),
  comments: yup
    .string()
    .required("Comments required")
    .min(8, "Comments must be at least 8 characters")
    .max(120, "Comments cannot exceed 120 characters"),
  dateOfBirth: yup
    .string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Invalid date format"
    )
    .required("Date is required"),
  name: yup
    .string()
    .required("Name required")
    .min(2, "Name must be at least 2 characters")
    .max(16, "Name cannot exceed 16 characters"),
  photo: yup.mixed().required("Photo required"),
});

export default AddPetValidationSchema;
