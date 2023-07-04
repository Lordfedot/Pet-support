import { ChangeEvent } from "react";
import { useField } from "formik";
import { toCapitilize } from "../../helpers/ToCapitilized";
import {
  AddPetModalInput,
  AddPetModalLabel,
  AddPetModalError,
} from "./ModalAddPets.styled";
import { checkOnError } from "../../helpers/CheckOnError";
interface CustomInputProps {
  name: string;
}

const DateInput = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = checkOnError(meta.touched, meta.error);
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
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    e.target.value = normalizeDate(value);
    helpers.setValue(e.target.value);
  };

  return (
    <>
      <AddPetModalLabel>
        Date of birth:
        <AddPetModalInput
          {...field}
          isError={isError}
          placeholder="00/00/0000"
          maxLength={10}
          type="text"
          onChange={handleDate}
        />
      </AddPetModalLabel>

      <AddPetModalError isError={isError}>{error}</AddPetModalError>
    </>
  );
};
export default DateInput;
