import { Link } from "react-router-dom";
import { useFormik } from "formik";
import LoginValidationSchema from "../helpers/ValidateLoginForm";
import { toCapitilize } from "../helpers/ToCapitilized";
import {
  FormInput,
  FormButton,
  FormList,
  FormText,
  ErrorMessage,
  FormItem,
  ValidMessage,
  AiFillCheckCircleStyled,
  RxCrossCircledStyled,
  Form,
} from "../styles/components/AuthForm.styled";
import { TitleForm } from "../styles/components/MainTitle.styles";
import { useAppDispatch, useAppSelector } from "../redux/selector";
import { login } from "../redux/operation";
import { reset } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../interfaces/ILoginUser";

const LoginForm = () => {
  const dispath = useAppDispatch();
  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values: LoginUser, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      dispath(login(values));
      if (isSuccess) {
        dispath(reset);
        resetForm();
        navigate("/");
      }
    },
  });

  const {
    handleSubmit,
    errors,
    touched,
    values,
    isSubmitting,
    handleChange,
    handleBlur,
  } = formik;

  const setClass = (error: any, touched: any) => {
    if (error && touched) {
      return "invalid";
    }
    if (!error && touched) {
      return "valid";
    } else {
      return "";
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleForm>Login</TitleForm>
      <FormList>
        <FormItem>
          <FormInput
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="Email"
            className={setClass(errors.email, touched.email)}
          ></FormInput>
          {errors.email && touched.email ? (
            <>
              <RxCrossCircledStyled />
              <ErrorMessage>{toCapitilize(errors.email)}</ErrorMessage>
            </>
          ) : null}
          {!errors.email && touched.email ? (
            <>
              <ValidMessage>Valid email</ValidMessage>
              <AiFillCheckCircleStyled />
            </>
          ) : null}
        </FormItem>
        <FormItem>
          <FormInput
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete="off"
            value={values.password}
            name={"password"}
            placeholder="Password"
            className={setClass(errors.password, touched.password)}
          ></FormInput>
          {errors.password && touched.password ? (
            <>
              <RxCrossCircledStyled />
              <ErrorMessage>{toCapitilize(errors.password)}</ErrorMessage>
            </>
          ) : null}
          {!errors.password && touched.password ? (
            <>
              <AiFillCheckCircleStyled />
              <ValidMessage>Valid password</ValidMessage>
            </>
          ) : null}
        </FormItem>
      </FormList>
      <FormButton disabled={isSubmitting} type="submit">
        Login
      </FormButton>
      <FormText>
        <p>Don't have an account?</p>
        <Link to={"/register"}>Register</Link>
      </FormText>
    </Form>
  );
};

export default LoginForm;
