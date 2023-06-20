import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  email: yup.string().required("Email required").email("Invalid email address"),
  password: yup
    .string()
    .required("Password required")
    .min(7, "Name must be at least 2 characters")
    .max(32, "Name cannot exceed 32 characters"),
});

export default LoginValidationSchema;
