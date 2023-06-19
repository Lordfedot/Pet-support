import { ChangeEvent, useEffect, useState } from "react";
import plug from "../../images/photo.jpg";

import {
  UserDataWrapper,
  DataImg,
  ImgWrapper,
  EditPhoto,
  MdAddAPhotoStyled,
  UserDataList,
} from "../../styles/components/UserPage.styled";
import UserDataItem from "./UserDataItem";
import Logout from "../Logout";
import { DisplayUser } from "../../interfaces/IDisplayUser";
import { Modal } from "../Modal";
import AvatarCroper from "./AvatarCroper";
type Props = {
  user: DisplayUser | null;
};

const UserData = ({ user }: Props) => {
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    if (!user?.avatar) {
      setSrc(plug);
    } else {
      setSrc(user.avatar);
    }
  }, [user?.avatar]);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  if (!user) return <></>;
  return (
    <>
      <UserDataWrapper>
        <ImgWrapper>
          <DataImg src={src} alt="none" />
          <EditPhoto onClick={() => setShowModal(true)}>
            <MdAddAPhotoStyled />
            Edit photo
          </EditPhoto>
        </ImgWrapper>
        <UserDataList>
          <UserDataItem
            editing={editing}
            getEditing={setEditing}
            data={user?.name}
            fieldName={"name"}
          ></UserDataItem>
          <UserDataItem
            editing={editing}
            getEditing={setEditing}
            data={user?.email}
            fieldName={"email"}
          ></UserDataItem>
          <UserDataItem
            editing={editing}
            getEditing={setEditing}
            data={user?.birthday}
            fieldName={"birthday"}
          ></UserDataItem>
          <UserDataItem
            editing={editing}
            getEditing={setEditing}
            data={user?.phone}
            fieldName={"phone"}
          ></UserDataItem>
          <UserDataItem
            editing={editing}
            getEditing={setEditing}
            data={user?.city}
            fieldName={"city"}
          ></UserDataItem>
        </UserDataList>
        <Logout />
      </UserDataWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <input type="file" onChange={handleFileChange} />
        <>
          <AvatarCroper setSrc={setSrc} file={file}></AvatarCroper>
        </>
      </Modal>
    </>
  );
};

export default UserData;
