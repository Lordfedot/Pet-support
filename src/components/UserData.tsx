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
const UserData = () => {
  const { user } = useAppSelector((state) => state.auth);
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
        <UserDataItem data={user?.name} text={"Name"}></UserDataItem>
        <UserDataItem data={user?.email} text={"Email"}></UserDataItem>
        <UserDataItem text={"Birthday"}></UserDataItem>
        <UserDataItem data={user?.phone} text={"Phone"}></UserDataItem>
        <UserDataItem data={user?.city} text={"City"}></UserDataItem>
      </UserDataList>
    </UserDataWrapper>
  );
};

export default UserData;
