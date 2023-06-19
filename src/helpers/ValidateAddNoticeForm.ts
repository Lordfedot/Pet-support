import * as yup from "yup";

export const NewNoticeValidationSchema = yup.object().shape({
  title: yup.string().required().min(8).max(60),
  category: yup.string().required(),
  petName: yup.string().required().min(3).max(30),
  breed: yup.string().required().min(3).max(16),
  sex: yup.string().required(),
  dateOfBirth: yup
    .string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Invalid date format"
    )
    .required("Date is required"),
  avatar: yup.mixed().required(),
  place: yup.string().required().min(3).max(20),
  price: yup.string().min(3).max(10),
  commentary: yup.string().required().min(8).max(120),
});
