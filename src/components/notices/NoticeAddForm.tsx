import { Form, Formik } from "formik";
import DateInput from "../ModalAddPets/DateInput";

import { CategoryRadioButtons } from "./CategoryRadioButtons";
import { SexRadioButtons } from "./SexRadioButtons";
import {
  AddNoticeButtonList,
  AddNoticeInput,
  AddNoticeIntro,
  AddNoticeTitle,
  FieldsList,
} from "../../styles/components/notices/NoticeAddForm.styled";
import { AddPetModalLabel } from "../ModalAddPets/ModalAddPets.styled";
import { NoticeByIdAddToButton } from "../../styles/components/notices/NoticeById.styled";
import FileInput from "../ModalAddPets/FileInput";
import React, { useState, Dispatch, SetStateAction } from "react";
import { NewNotice } from "../../interfaces/NewNotice";
import { addNotice } from "../../helpers/fetchNotices";
import { NewNoticeValidationSchema } from "../../helpers/ValidateAddNoticeForm";
import TextArea from "../ModalAddPets/TextArea";

const initialValues = {
  title: "",
  category: "",
  petName: "",
  dateOfBirth: "",
  breed: "",
  sex: "",
  place: "",
  avatar: null,
  price: "",
  commentary: "",
};
type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const NoticesAddForm = ({ setShowModal }: Props) => {
  const [page, setPage] = useState(1);

  const handleSubmit = async (values: NewNotice) => {
    console.log(1, );
    const response = await addNotice(values)
    if (response?.status === 201) {
      window.location.reload();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NewNoticeValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <AddNoticeTitle>Add pet</AddNoticeTitle>
        {page === 1 && (
          <AddNoticeIntro>
            Don't wait any longer, give your furry friend the care and love they
            deserve by adding them to our family today!
          </AddNoticeIntro>
        )}
        <FieldsList>
          {page === 1 && (
            <>
              <li>
                <CategoryRadioButtons name={"category"}></CategoryRadioButtons>
              </li>
              <li>
                <AddPetModalLabel htmlFor="title">
                  Title of ad:
                  <AddNoticeInput
                    id="title"
                    name="title"
                    type="text"
                  ></AddNoticeInput>
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel htmlFor="petName">
                  Name pet:
                  <AddNoticeInput name="petName" type="text"></AddNoticeInput>
                </AddPetModalLabel>
              </li>
              <li>
                <DateInput name="dateOfBirth"></DateInput>
              </li>
              <li>
                <AddPetModalLabel htmlFor="breed">
                  Breed:
                  <AddNoticeInput name="breed" type="text"></AddNoticeInput>
                </AddPetModalLabel>
              </li>
            </>
          )}
          {page === 2 && (
            <>
              <li>
                <AddPetModalLabel>
                  The sex:
                  <SexRadioButtons name="sex"></SexRadioButtons>
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel htmlFor="place">
                  Location:
                  <AddNoticeInput name="place" type="text"></AddNoticeInput>
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel htmlFor="price">
                  Price:
                  <AddNoticeInput name="price" type="text"></AddNoticeInput>
                </AddPetModalLabel>
              </li>
              <li>
                <FileInput name="avatar"></FileInput>
              </li>
              <li>
                <TextArea name="commentary"></TextArea>
              </li>
            </>
          )}
        </FieldsList>
        {page === 1 && (
          <AddNoticeButtonList>
            <li>
              <NoticeByIdAddToButton
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </NoticeByIdAddToButton>
            </li>
            <li>
              <NoticeByIdAddToButton type="button" onClick={() => setPage(2)}>
                Next
              </NoticeByIdAddToButton>
            </li>
          </AddNoticeButtonList>
        )}
        {page === 2 && (
          <AddNoticeButtonList>
            <li>
              <NoticeByIdAddToButton type="button" onClick={() => setPage(1)}>
                Back
              </NoticeByIdAddToButton>
            </li>
            <li>
              <NoticeByIdAddToButton type="submit">Done</NoticeByIdAddToButton>
            </li>
          </AddNoticeButtonList>
        )}
      </Form>
    </Formik>
  );
};
