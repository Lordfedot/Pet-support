import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import RegisterValidationSchema from "../../helpers/ValidateRegisterForm";
import {
  FormStyled,
  FormButton,
  FormList,
  FormText,
  ButtonWrapper,
  FormItem,
} from "../../styles/components/AuthForm.styled";
import { TitleForm } from "../../styles/components/MainTitle.styles";
import { useAppDispatch, useAppSelector } from "../../redux/selector";
import { register } from "../../redux/operation";
import { reset } from "../../redux/slice";
import AuthInput from "./AuthInput";
import AuthDateInput from "./AuthDateInput";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  city: "",
  birthday: "",
  phone: "",
};
const RegisterForm = () => {
  const dispath = useAppDispatch();
  const { isSuccess } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handleSubmit = async (values: any) => {
    const newUser = {
      email: values.email,
      password: values.password,
      name: values.name,
      city: values.city,
      phone: values.phone,
      birthday: values.birthday
    };

    await dispath(register(newUser));
    
    if (isSuccess) {
      dispath(reset);
      navigate("/login");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <TitleForm>Registration</TitleForm>
        {page === 1 && (
          <>
            <FormList>
              <FormItem>
                <AuthInput name="email" />
              </FormItem>
              <FormItem>
                <AuthInput name="password" />
              </FormItem>
              <FormItem>
                <AuthInput name="confirmPassword" />
              </FormItem>
            </FormList>
            <FormButton onClick={() => setPage(2)} type="button">
              Next
            </FormButton>
          </>
        )}
        {page === 2 && (
          <>
            <FormList>
            <FormItem>
                <AuthInput name="name" />
              </FormItem>
              <FormItem>
                <AuthInput name="city" />
              </FormItem>
              <FormItem>
                <AuthDateInput name="birthday" />
              </FormItem>
              <FormItem>
                <AuthInput name="phone" />
              </FormItem>
            </FormList>
            <ButtonWrapper>
              <FormButton type="submit">Register</FormButton>
              <FormButton onClick={() => setPage(1)} type="button">
                Back
              </FormButton>
            </ButtonWrapper>
          </>
        )}
        <FormText>
          <p>Already have an account?</p>
          <Link to={"/login"}>Login</Link>
        </FormText>
      </FormStyled>
    </Formik>
  );
};

export default RegisterForm;
