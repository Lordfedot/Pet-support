import { Form, Formik } from "formik";
import {
  AddPetModalButtonWrapper,
  AddPetModalButton,
  AddPetModalList,
  AddPetModalFileItem,
} from "./ModalAddPets.styled";
import { Dispatch, SetStateAction, useState } from "react";

import AddPetValidationSchema from "../../helpers/ValidateAddPetForm";
import { NewPet } from "../../interfaces/NewPet";
import { AddPetForUser } from "../../helpers/Api";
import CustomInput from "./TextInput";
import FileInput from "./FileInput";
import DateInput from "./DateInput";
import TextArea from "./TextArea";
const initialValues = {
  breed: "",
  comments: "",
  dateOfBirth: "",
  name: "",
  photo: undefined,
};
type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
const ModalAddPets = ({ setShowModal }: Props) => {
  const [page, setPage] = useState(1);

  const handleSubmit = async (values: NewPet) => {
    const response = await AddPetForUser(values);
    if (response?.status === 201) {
      window.location.reload()
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddPetValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {page === 1 && (
          <>
            <AddPetModalList>
              <li>
                <CustomInput name="name" />
              </li>
              <li>
                <DateInput name="dateOfBirth" />
              </li>
              <li>
                <CustomInput name="breed" />
              </li>
            </AddPetModalList>
            <AddPetModalButtonWrapper>
              <AddPetModalButton onClick={() => setPage(2)} type="button">
                Next
              </AddPetModalButton>
              <AddPetModalButton
                onClick={() => setShowModal(false)}
                type="button"
              >
                Cancel
              </AddPetModalButton>
            </AddPetModalButtonWrapper>
          </>
        )}
        {page === 2 && (
          <>
            <AddPetModalList>
              <AddPetModalFileItem>
                <FileInput name="photo" />
              </AddPetModalFileItem>
              <li>
                <TextArea name="comments" />
              </li>
            </AddPetModalList>
            <AddPetModalButtonWrapper>
              <AddPetModalButton type="submit">Done</AddPetModalButton>
              <AddPetModalButton onClick={() => setPage(1)} type="button">
                Back
              </AddPetModalButton>
            </AddPetModalButtonWrapper>
          </>
        )}
      </Form>
    </Formik>
  );
};

export default ModalAddPets;
