import {
  DataItem,
  UserDataInput,
  InputWrapper,
  UserDataText,
  CheckButton,
  PencilButton,
  AiOutlineCheckStyled,
  BsPencilStyled,
} from "../styles/components/UserDataItem.styled";
import { useState, ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
  data?: string;
  text: string;
  getEditing: Function;
  editing: boolean;
};
const UserDataItem = ({ text, data, editing, getEditing }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [value, setValue] = useState(data);
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };
  const handleOnClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    getEditing(true);
    setIsEditing(!isEditing);
  };
  const handleOnClickClose: MouseEventHandler<HTMLButtonElement> = () => {
    getEditing(false);
    setIsEditing(!isEditing);
  };
  return (
    <DataItem>
      <p>{text}:</p>
      <InputWrapper>
        {isEditing ? (
          <>
            <UserDataInput
              autoFocus
              onChange={handleOnChange}
              value={value}
            ></UserDataInput>
            <CheckButton onClick={handleOnClickClose} type="button">
              <AiOutlineCheckStyled />
            </CheckButton>
          </>
        ) : (
          <>
            <UserDataText>{value}</UserDataText>
            <PencilButton
              disabled={editing}
              onClick={handleOnClickEdit}
              type="button"
            >
              <BsPencilStyled />
            </PencilButton>
          </>
        )}
      </InputWrapper>
    </DataItem>
  );
};

export default UserDataItem;
