import {
  DataItem,
  UserDataInput,
  InputWrapper,
  UserDataText,
  CheckButton,
  PencilButton,
  AiOutlineCheckStyled,
  BsPencilStyled,
} from "../../styles/components/UserDataItem.styled";
import { useState, MouseEventHandler, SetStateAction, Dispatch } from "react";
import { updateUser } from "../../helpers/Api";
import { toCapitilize } from "../../helpers/ToCapitilized";
type Props = {
  data?: string;
  fieldName: string;
  getEditing: Dispatch<SetStateAction<boolean>>;
  editing: boolean;
};
const UserDataItem = ({ fieldName, data = "", editing, getEditing }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(data);
  const text = toCapitilize(fieldName);
  
  const handleOnClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    getEditing(true);
    setIsEditing(!isEditing);
  };

  const handleOnClickClose: MouseEventHandler<HTMLButtonElement> = async () => {
    getEditing(false);
    setIsEditing(!isEditing);
    if (value === data) {
      return
    }
    await updateUser(fieldName, value);
  };
  return (
    <DataItem>
      <p>{text}:</p>
      <InputWrapper>
        {isEditing ? (
          <>
            <UserDataInput
              name={`${fieldName}`}
              autoFocus
              onChange={(e) => setValue(e.currentTarget.value)}
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
