import { useFormik } from "formik";
import {
  AddPetModalWrapper,
  AddPetModalTitle,
  AddPetModalLabel,
  AddPetModalInput,
  AddPetModalButtonWrapper,
  AddPetModalButton,
  AddPetModalList,
  AddPetModalFile,
  AddPetModalFileLabel,
  AddPetModalFileItem,
  AiOutlinePlusStyled,
  AddPetModalFileTextArea
} from "../styles/components/ModalAddPets.styled";
import { Dispatch,SetStateAction, useState } from "react";
type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
const ModalAddPets = ({setShowModal}: Props) => {
  // const formik = useFormik()
  const [page, setPage] = useState(1);
  return (
    <AddPetModalWrapper>
      <AddPetModalTitle>Add pet</AddPetModalTitle>
      <form>
        {page === 1 && (
          <>
            <AddPetModalList>
              <li>
                <AddPetModalLabel>
                  Name pet
                  <AddPetModalInput placeholder="Type name pet" type="text" />
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel>
                  Date of birth
                  <AddPetModalInput
                    placeholder="Type date of birth"
                    type="text"
                  />
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel>
                  Breed
                  <AddPetModalInput placeholder="Type breed" type="text" />
                </AddPetModalLabel>
              </li>
            </AddPetModalList>

            <AddPetModalButtonWrapper>
              <AddPetModalButton onClick={()=> setShowModal(false)} type="button">Cancel</AddPetModalButton>
              <AddPetModalButton onClick={() => setPage(2)} type="button">
                Next
              </AddPetModalButton>
            </AddPetModalButtonWrapper>
          </>
        )}
        {page === 2 && (
          <>
            <AddPetModalList>
              <AddPetModalFileItem>
                <p>Add photo</p>
                <AddPetModalFileLabel>
                  <AiOutlinePlusStyled />
                  <AddPetModalFile
                    accept=".png, .jpg, .jpeg"
                    type="file"
                  ></AddPetModalFile>
                </AddPetModalFileLabel>
              </AddPetModalFileItem>

              <li>
                <AddPetModalLabel>
                  Comments
                  <AddPetModalFileTextArea></AddPetModalFileTextArea>
                </AddPetModalLabel>
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
      </form>
    </AddPetModalWrapper>
  );
};

export default ModalAddPets;
