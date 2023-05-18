import {
  DataItem,
  UserDataInput,
  InputWrapper,
  UserDataText,
} from "../styles/components/UserDataItem.styled";
import { useState, ChangeEventHandler } from "react";
type Props = {
  data?: string;
  text: string;
};
const UserDataItem = ({ text, data }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log(data);
  
  const [value, setValue] = useState(data);
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <DataItem>
      <p>{text}:</p>
      <InputWrapper>
        {isEditing ? (
          <>
            <UserDataInput
              onChange={handleOnChange}
              value={value}
            ></UserDataInput>
            <button onClick={() => setIsEditing(false)} type="button">
              close
            </button>
          </>
        ) : (
          <>
            <UserDataText>{value}</UserDataText>
            <button onClick={() => setIsEditing(true)} type="button">
              Edit
            </button>
          </>
        )}
      </InputWrapper>
    </DataItem>
  );
};

export default UserDataItem;
