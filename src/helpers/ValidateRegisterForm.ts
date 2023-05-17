import * as yup from "yup";

const RegisterValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(7).max(32),
  name: yup.string().required(),
  city: yup.string().required(),
  phone: yup.string().required(),
});

export default RegisterValidationSchema;
