import { useState } from "react";
import plug from "../images/photo.jpg";
import { useAppSelector } from "../redux/selector";
import {
  UserDataWrapper,
  DataImg,
  ImgWrapper,
  EditPhoto,
  MdAddAPhotoStyled,
  UserDataList,
} from "../styles/components/UserPage.styled";
import UserDataItem from "./UserDataItem";
import Logout from "./Logout";


const UserData = () => {
  const [editing, setEditing] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  const getEditing = (value: boolean) => {
    setEditing(value);
  };
  return (
    <UserDataWrapper>
      <ImgWrapper>
        <DataImg src={plug} alt="none" />
        <EditPhoto>
          <MdAddAPhotoStyled />
          Edit photo
        </EditPhoto>
      </ImgWrapper>
      <UserDataList>
        <UserDataItem
          editing={editing}
          getEditing={getEditing}
          data={user?.name}
          text={"Name"}
        ></UserDataItem>
        <UserDataItem
          editing={editing}
          getEditing={getEditing}
          data={user?.email}
          text={"Email"}
        ></UserDataItem>
        <UserDataItem
          editing={editing}
          getEditing={getEditing}
          text={"Birthday"}
        ></UserDataItem>
        <UserDataItem
          editing={editing}
          getEditing={getEditing}
          data={user?.phone}
          text={"Phone"}
        ></UserDataItem>
        <UserDataItem
          editing={editing}
          getEditing={getEditing}
          data={user?.city}
          text={"City"}
        ></UserDataItem>
      </UserDataList>
      <Logout/>
    </UserDataWrapper>
  );
};

export default UserData;
