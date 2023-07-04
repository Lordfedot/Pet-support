import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import LoginValidationSchema from "../../helpers/ValidateLoginForm";
import {
  FormStyled,
  FormButton,
  FormList,
  FormText,
  FormItem,
} from "../../styles/components/AuthForm.styled";
import { TitleForm } from "../../styles/components/MainTitle.styles";
import { useAppDispatch, useAppSelector } from "../../redux/selector";
import { login } from "../../redux/operation";
import { reset } from "../../redux/slice";
import AuthInput from "./AuthInput";

const initialValues = {
  email: "",
  password: "",
};
const AuthForm = () => {
  const dispath = useAppDispatch();
  const { isSuccess } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    await dispath(login(values));
    
    if (isSuccess) {
      dispath(reset);
      navigate("/user");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <TitleForm>Login</TitleForm>
        <FormList>
          <FormItem>
            <AuthInput name="email" />
          </FormItem>
          <FormItem>
            <AuthInput name="password" />
          </FormItem>
        </FormList>
        <FormButton type="submit">Login</FormButton>
        <FormText>
          <p>Don't have an account?</p>
          <Link to={"/register"}>Register</Link>
        </FormText>
      </FormStyled>
    </Formik>
  );
};

export default AuthForm;
