import * as yup from "yup";

const RegisterValidationSchema = yup.object().shape({
  email: yup.string().required("Email required").email("Invalid email address"),
  password: yup
    .string()
    .required("Password required")
    .min(7, "Name must be at least 2 characters")
    .max(32, "Name cannot exceed 32 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password required"),
  name: yup
    .string()
    .required("Name required")
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name cannot exceed 25 characters"),
  city: yup
    .string()
    .required("City required")
    .min(2, "City must be at least 2 characters")
    .max(25, "City cannot exceed 25 characters"),
  phone: yup
    .string()
    .required("Phone required")
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  birthday: yup
    .string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Invalid date format"
    )
    .required("Birthday required"),
});

export default RegisterValidationSchema;
