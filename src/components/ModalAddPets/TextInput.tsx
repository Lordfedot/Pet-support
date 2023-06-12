import { ChangeEvent } from "react";
import { useField } from "formik";
import { toCapitilize } from "../../helpers/ToCapitilized";
import {
  AddPetModalError,
  AddPetModalInput,
  AddPetModalLabel,
} from "./ModalAddPets.styled";
import { checkOnError } from "../../helpers/CheckOnError";
interface CustomInputProps {
  name: string;
}

const CustomInput = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = checkOnError(meta.touched, meta.error)
  const error = toCapitilize(meta.error)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const modifiedValue = toCapitilize(value);

    helpers.setValue(modifiedValue);
  };

  return (
    <>
      <AddPetModalLabel>
        {toCapitilize(name)}
        <AddPetModalInput
          isError={isError}
          {...field}
          placeholder={`Type ${name} pet`}
          type="text"
          onChange={handleChange}
        />
      </AddPetModalLabel>

      {meta.touched && meta.error && (
        <AddPetModalError>{error}</AddPetModalError>
      )}
    </>
  );
};
export default CustomInput;
