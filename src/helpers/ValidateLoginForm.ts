import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(7).max(32),
});

export default LoginValidationSchema;
