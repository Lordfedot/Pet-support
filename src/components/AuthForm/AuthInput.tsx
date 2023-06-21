import { useField } from "formik";
import { checkOnError, checkOnValid } from "../../helpers/CheckOnError";
import { toCapitilize } from "../../helpers/ToCapitilized";
import {
  FormInput,
  ErrorMessage,
  ValidMessage,
  AiFillCheckCircleStyled,
  RxCrossCircledStyled,
} from "../../styles/components/AuthForm.styled";
import { ChangeEvent } from "react";

interface CustomInputProps {
  name: string;
}
const AuthInput = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = checkOnError(meta.touched, meta.error);
  const isValid = checkOnValid(meta.touched, meta.error);
  const error = toCapitilize(meta.error);
  const capitalName =
    name === "confirmPassword" ? "Confirm password" : toCapitilize(name);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const modifiedValue = toCapitilize(value);
    helpers.setValue(modifiedValue);
  };
  return (
    <>
      <FormInput
        type="text"
        {...field}
        onChange={handleChange}
        placeholder={`${capitalName}`}
        isError={isError}
        isValid={isValid}
      ></FormInput>
      <>
        <RxCrossCircledStyled style={{ opacity: isError ? 1 : 0 }} />
        <ErrorMessage isError={isError}>{error}</ErrorMessage>
      </>

      <>
        <ValidMessage isValid={isValid}>Valid {capitalName}</ValidMessage>
        <AiFillCheckCircleStyled style={{ opacity: isValid ? 1 : 0 }} />
      </>
    </>
  );
};

export default AuthInput;
