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
const AuthDateInput = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = checkOnError(meta.touched, meta.error);
  const isValid = checkOnValid(meta.touched, meta.error);
  const error = toCapitilize(meta.error);

  const normalizeDate = (value: string) => {
    if (value.length <= 6) {
      return (
        value
          .replace(/\D/g, "")
          .match(/.{1,2}/g)
          ?.join("/") || ("" as string)
      );
    } else {
      return value;
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = normalizeDate(value);
    helpers.setValue(event.target.value);
  };
  return (
    <>
      <FormInput
        type="text"
        {...field}
        placeholder="Birthday"
        maxLength={10}
        onChange={handleChange}
        isError={isError}
        isValid={isValid}
      ></FormInput>
      {isError && (
        <>
          <RxCrossCircledStyled />
          <ErrorMessage>{error}</ErrorMessage>
        </>
      )}
      {isValid && (
        <>
          <ValidMessage>Valid {name}</ValidMessage>
          <AiFillCheckCircleStyled />
        </>
      )}
    </>
  );
};

export default AuthDateInput;
