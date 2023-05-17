import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import RegisterValidationSchema from "../helpers/ValidateRegisterForm";

import { toCapitilize } from "../helpers/ToCapitilized";
import {
  FormInput,
  FormButton,
  FormList,
  FormText,
  ButtonWrapper,
  ErrorMessage,
  FormItem,
  ValidMessage,
  AiFillCheckCircleStyled,
  RxCrossCircledStyled,
  Form,
} from "../styles/components/AuthForm.styled";
import { TitleForm } from "../styles/components/MainTitle.styles";

const AuthForm = () => {
  const [page, setPage] = useState(1);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      city: "",
      phone: "",
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
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
  console.log(errors);
  console.log(touched);
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

  const setClassConfirmPassword = (
    password: string,
    confirmPassword: string,
    touched: any,
    error: any
  ) => {
    if (password !== confirmPassword && touched) {
      return "invalid";
    }
    if (password === confirmPassword && touched && !error) {
      return "valid";
    } else {
      return "";
    }
  };
  const checkDisabled =
    values.password === values.confirmPassword &&
    values.password &&
    values.confirmPassword &&
    values.email &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;
  return (
    <Form onSubmit={handleSubmit}>
      <TitleForm>Registration</TitleForm>
      {page === 1 && (
        <>
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
            <FormItem>
              <FormInput
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                autoComplete="off"
                name={"confirmPassword"}
                placeholder="Confirm Password"
                className={setClassConfirmPassword(
                  values.password,
                  values.confirmPassword,
                  touched.confirmPassword,
                  errors.password
                )}
              ></FormInput>
              {values.password !== values.confirmPassword &&
              touched.confirmPassword ? (
                <>
                  <RxCrossCircledStyled />
                  <ErrorMessage>Passwords don't match</ErrorMessage>
                </>
              ) : null}
              {values.password === values.confirmPassword &&
              touched.confirmPassword &&
              !errors.password &&
              touched.password ? (
                <>
                  <AiFillCheckCircleStyled />
                  <ValidMessage>Valid password</ValidMessage>
                </>
              ) : null}
            </FormItem>
          </FormList>
          <FormButton
            disabled={!checkDisabled}
            onClick={() => setPage(2)}
            type="button"
          >
            Next
          </FormButton>
        </>
      )}
      {page === 2 && (
        <>
          <FormList>
            <FormItem>
              <FormInput
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                name={"name"}
                placeholder="Name"
                className={setClass(errors.name, touched.name)}
              ></FormInput>
              {errors.name && touched.name ? (
                <>
                  <RxCrossCircledStyled />
                  <ErrorMessage>{toCapitilize(errors.name)}</ErrorMessage>
                </>
              ) : null}
              {!errors.name && touched.name ? (
                <>
                  <AiFillCheckCircleStyled />
                  <ValidMessage>Valid name</ValidMessage>
                </>
              ) : null}
            </FormItem>
            <FormItem>
              <FormInput
                onBlur={handleBlur}
                value={values.city}
                onChange={handleChange}
                name={"city"}
                placeholder="City, region"
                className={setClass(errors.city, touched.city)}
              ></FormInput>
              {errors.city && touched.city ? (
                <>
                  <RxCrossCircledStyled />
                  <ErrorMessage>{toCapitilize(errors.city)}</ErrorMessage>
                </>
              ) : null}
              {!errors.city && touched.city ? (
                <>
                  <AiFillCheckCircleStyled />
                  <ValidMessage>Valid city</ValidMessage>
                </>
              ) : null}
            </FormItem>
            <FormItem>
              <FormInput
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                name={"phone"}
                placeholder="Mobile Phone"
                className={setClass(errors.phone, touched.phone)}
              ></FormInput>
              {errors.phone && touched.phone ? (
                <>
                  <RxCrossCircledStyled />
                  <ErrorMessage>{toCapitilize(errors.phone)}</ErrorMessage>
                </>
              ) : null}
              {!errors.phone && touched.phone ? (
                <>
                  <AiFillCheckCircleStyled />
                  <ValidMessage>Valid phone</ValidMessage>
                </>
              ) : null}
            </FormItem>
          </FormList>
          <ButtonWrapper>
            <FormButton disabled={isSubmitting} type="submit">
              Sumbit
            </FormButton>
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
    </Form>
  );
};

export default AuthForm;
