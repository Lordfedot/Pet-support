import { ChangeEvent, useState } from "react";
import { useField } from "formik";
import ImgCroper from "../ImgCroper";
import {
  AddPetModalAvatar,
  AddPetModalFile,
  AddPetModalFileLabel,
  AiOutlinePlusStyled,
  AddPetModalError,
} from "./ModalAddPets.styled";
import { toCapitilize } from "../../helpers/ToCapitilized";
import { checkOnError } from "../../helpers/CheckOnError";
interface CustomInputProps {
  name: string;
}

const FileInput = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const [file, setFile] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const isError = checkOnError(meta.touched, meta.error)
  const error = toCapitilize(meta.error)
  
  const getNewFile = ({ previewUrl, file }: any) => {
    setSrc(previewUrl);
    helpers.setValue(file);
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  
  return (
    <>
      <p>Add photo</p>
      {file === null && src === null && (
        <>
          <AddPetModalFileLabel isError={isError}>
            <AiOutlinePlusStyled/>
            <AddPetModalFile
              {...field}
              
              accept=".png, .jpg, .jpeg"
              onChange={handleFileChange}
              type="file"
            ></AddPetModalFile>
          </AddPetModalFileLabel>
          {meta.touched && meta.error && (
            <AddPetModalError file>{error}</AddPetModalError>
          )}
        </>
      )}
      {file && src === null && (
        <ImgCroper getNewFile={getNewFile} file={file}></ImgCroper>
      )}
      {src && <AddPetModalAvatar src={src} alt="avatar"></AddPetModalAvatar>}
    </>
  );
};
export default FileInput;
