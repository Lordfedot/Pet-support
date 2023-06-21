import { ChangeEvent } from "react";
import { useField } from "formik";
import { toCapitilize } from "../../helpers/ToCapitilized";
import {
  AddPetModalTextArea,
  AddPetModalLabel,
  AddPetModalError,
} from "./ModalAddPets.styled";
import { checkOnError } from "../../helpers/CheckOnError";
interface CustomInputProps {
  name: string;
}

const TextArea = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = checkOnError(meta.touched, meta.error);
  const error = toCapitilize(meta.error);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    const modifiedValue = toCapitilize(value);
    helpers.setValue(modifiedValue);
  };

  return (
    <>
      <AddPetModalLabel>
        {toCapitilize(name)}
        <AddPetModalTextArea
          isError={isError}
          {...field}
          onChange={handleChange}
        />
      </AddPetModalLabel>

      <AddPetModalError isError={isError}>{error}</AddPetModalError>
    </>
  );
};
export default TextArea;
