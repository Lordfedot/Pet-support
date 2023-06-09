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
  AddPetModalFileTextArea,
  AddPetModalAvatar,
} from "../styles/components/ModalAddPets.styled";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import ImgCropper from "./ImgCroper";
import AddPetValidationSchema from "../helpers/ValidateAddPetForm";
import { NewPet } from "../interfaces/NewPet";
import { AddPetForUser } from "../helpers/Api";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ModalAddPets = ({ setShowModal }: Props) => {
  const [page, setPage] = useState(1);
  const [file, setFile] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      breed: "",
      comments: "",
      dateOfBirth: "",
      name: "",
      photo: null,
    },
    validationSchema: AddPetValidationSchema,
    onSubmit: async (values: NewPet, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      await AddPetForUser(values);
      resetForm();
    },
  });

  const { handleSubmit, handleChange, setFieldValue } = formik;

  const getNewFile = ({ previewUrl, file }: any) => {
    setSrc(previewUrl);
    setFieldValue("photo", file);
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <AddPetModalWrapper>
      <AddPetModalTitle>Add pet</AddPetModalTitle>
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <>
            <AddPetModalList>
              <li>
                <AddPetModalLabel>
                  Name pet
                  <AddPetModalInput
                    name="name"
                    onChange={handleChange}
                    placeholder="Type name pet"
                    type="text"
                  />
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel>
                  Date of birth
                  <AddPetModalInput
                    name="dateOfBirth"
                    placeholder="Type date of birth"
                    type="text"
                    onChange={handleChange}
                  />
                </AddPetModalLabel>
              </li>
              <li>
                <AddPetModalLabel>
                  Breed
                  <AddPetModalInput
                    name="breed"
                    onChange={handleChange}
                    placeholder="Type breed"
                    type="text"
                  />
                </AddPetModalLabel>
              </li>
            </AddPetModalList>

            <AddPetModalButtonWrapper>
              <AddPetModalButton
                onClick={() => setShowModal(false)}
                type="button"
              >
                Cancel
              </AddPetModalButton>
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
                {file === null && src === null && (
                  <AddPetModalFileLabel>
                    <AiOutlinePlusStyled />
                    <AddPetModalFile
                      onChange={handleFileChange}
                      accept=".png, .jpg, .jpeg"
                      type="file"
                    ></AddPetModalFile>
                  </AddPetModalFileLabel>
                )}
                {file && src === null && (
                  <ImgCropper getNewFile={getNewFile} file={file}>
                    <div>
                      <img src="f" alt="f" />
                      <canvas
                        style={{
                          borderRadius: "40px",
                          border: "1px solid black",
                          objectFit: "cover",
                          width: "208px",
                          height: "208px",
                        }}
                      />
                    </div>
                  </ImgCropper>
                )}
                {src && (
                  <AddPetModalAvatar src={src} alt="avatar"></AddPetModalAvatar>
                )}
              </AddPetModalFileItem>

              <li>
                <AddPetModalLabel>
                  Comments
                  <AddPetModalFileTextArea
                    name="comments"
                    onChange={handleChange}
                  ></AddPetModalFileTextArea>
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
