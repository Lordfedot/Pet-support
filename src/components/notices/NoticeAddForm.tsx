import { Form, Formik } from "formik";
import DateInput from "../ModalAddPets/DateInput";

import { CategoryRadioButtons } from "./CategoryRadioButtons";
import { SexRadioButtons } from "./SexRadioButtons";
import {
  AddNoticeArea,
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

const initialValues = {
  category: "",
  title: "",
  petName: "",
  dateOfBirth: "",
  breed: "",
  sex: "",
  place: "",
  avatar: undefined,
  price: "",
  commentary: "",
};
type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const NoticesAddForm = ({ setShowModal }: Props) => {
  const [page, setPage] = useState(1);

  const handleSubmit = async (values: NewNotice) => {
    const response = await addNotice(values)
    if (response?.status === 201) {
      window.location.reload();
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={NewNoticeValidationSchema}>
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
                <CategoryRadioButtons></CategoryRadioButtons>
              </li>
              <li>
                <AddPetModalLabel htmlFor="title">
                  Title of ad:
                  <AddNoticeInput name="title" type="text"></AddNoticeInput>
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
                  <SexRadioButtons></SexRadioButtons>
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel htmlFor="location">
                  Location:
                  <AddNoticeInput name="location" type="text"></AddNoticeInput>
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel htmlFor="price">
                  Price:
                  <AddNoticeInput name="price" type="text"></AddNoticeInput>
                </AddPetModalLabel>
              </li>
              <li>
                <FileInput name="photo"></FileInput>
              </li>
              <li>
                <AddPetModalLabel htmlFor="comments">
                  Comments:
                  <AddNoticeArea
                    component="textArea"
                    name="comments"
                    type="text"
                  ></AddNoticeArea>
                </AddPetModalLabel>
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
