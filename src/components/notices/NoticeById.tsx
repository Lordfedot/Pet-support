import {
  deleteNotice,
  getCurrentUser,
  updateFavouriteList,
} from "../../helpers/fetchNotices";
import { INotice } from "../../interfaces/INotice";
import {
  NoticeByIdAvatar,
  NoticeByIdCategory,
  NoticeByIdContainer,
  NoticeByIdDescriptionList,
  NoticeByIdDescriptionListItem,
  NoticeByIdTitle,
  NoticeDescriptionContainer,
  NoticeByIdDescriptionData,
  NoticeByIdFieldDescription,
  NoticeByIdContacts,
  NoticeByIdComents,
  NoticeByIdComentsData,
  NoticeByIdButtonsList,
  NoticeByIdContactButton,
  NoticeByIdAddToButton,
  IconDelete,
} from "../../styles/components/notices/NoticeById.styled";
import { Icon } from "../svgIcon";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
type NoticeProps = {
  data: INotice;
  isAuthenticated: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onFavouriteChange: (id: string) => void;
  onDelete: (id: string) => void;
};

export const NoticesById = ({
  data,
  isAuthenticated,
  setShowModal,
  onFavouriteChange,
  onDelete
}: NoticeProps) => {
  const [isPrivat, setIsPrivat] = useState(false);
  const [isFavourite, setFavourite] = useState(data.isInFavourite);
  const telRef: string = `tel: ${data.ownerPhone}`;
  const mailRef: string = `mailto: ${data.ownerEmail}`;

  const privatStateHandler = async () => {
    const currentUser = await getCurrentUser();
    if (currentUser._id === data.owner) {
      setIsPrivat(true);
    } else {
      setIsPrivat(false);
    }
  };

  useEffect(() => {
    privatStateHandler();
  });

  const onDeleteClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onDelete(e.currentTarget.id)
    await deleteNotice(e.currentTarget.id);
    await setShowModal(false);
  };

  const onAddToFavouriteClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onFavouriteChange(e.currentTarget.id);
    await updateFavouriteList(e.currentTarget.id);
    await setFavourite((prevState) => !prevState);
  };

  console.log(data);
  return (
    <NoticeByIdContainer>
      <NoticeDescriptionContainer>
        <NoticeByIdCategory>{data.category}</NoticeByIdCategory>
        <NoticeByIdAvatar src={data.avatar ? data.avatar : ""} alt="" />
        <div>
          <NoticeByIdTitle>{data.title}</NoticeByIdTitle>
          <NoticeByIdDescriptionList>
            {data.petName && (
              <NoticeByIdDescriptionListItem>
                <NoticeByIdFieldDescription>Name:</NoticeByIdFieldDescription>
                <NoticeByIdDescriptionData>
                  {data.petName}
                </NoticeByIdDescriptionData>
              </NoticeByIdDescriptionListItem>
            )}
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Birthday:</NoticeByIdFieldDescription>
              <NoticeByIdDescriptionData>
                {data.dateOfBirth}
              </NoticeByIdDescriptionData>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Breed:</NoticeByIdFieldDescription>
              <NoticeByIdDescriptionData>
                {data.breed}
              </NoticeByIdDescriptionData>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Place:</NoticeByIdFieldDescription>
              <NoticeByIdDescriptionData>
                {data.place}
              </NoticeByIdDescriptionData>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>The sex:</NoticeByIdFieldDescription>
              <NoticeByIdDescriptionData>{data.sex}</NoticeByIdDescriptionData>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Email:</NoticeByIdFieldDescription>{" "}
              <NoticeByIdContacts href={data.ownerEmail ? mailRef : ""}>
                {data.ownerEmail ? data.ownerEmail : ""}
              </NoticeByIdContacts>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Phone:</NoticeByIdFieldDescription>
              <NoticeByIdContacts href={data.ownerPhone ? telRef : ""}>
                {data.ownerPhone ? data.ownerPhone : ""}
              </NoticeByIdContacts>
            </NoticeByIdDescriptionListItem>
            {data.price && (
              <NoticeByIdDescriptionListItem>
                <NoticeByIdFieldDescription>Price:</NoticeByIdFieldDescription>
                <NoticeByIdDescriptionData>
                  {data.price}
                </NoticeByIdDescriptionData>
              </NoticeByIdDescriptionListItem>
            )}
          </NoticeByIdDescriptionList>
        </div>
      </NoticeDescriptionContainer>
      <NoticeByIdComents>
        Comments:
        <NoticeByIdComentsData>
          {data.commentary ? data.commentary : ""}
        </NoticeByIdComentsData>
      </NoticeByIdComents>
      <NoticeByIdButtonsList>
        {isAuthenticated && (
          <li>
            <NoticeByIdAddToButton
              id={data._id}
              onClick={onAddToFavouriteClick}
            >
              {isFavourite === true ? "Remove from" : "Add to"}
              <Icon iconId={"iconFavourite"} width={16} height={16}></Icon>
            </NoticeByIdAddToButton>
          </li>
        )}
        {isPrivat ? (
          <li>
            <NoticeByIdAddToButton id={data._id} onClick={onDeleteClick}>
              Delete
              <IconDelete
                iconId={"iconDelete"}
                width={16}
                height={16}
              ></IconDelete>
            </NoticeByIdAddToButton>
          </li>
        ) : (
          <li>
            <NoticeByIdContactButton href="tel: +111-11-11">
              Contact
            </NoticeByIdContactButton>
          </li>
        )}
      </NoticeByIdButtonsList>
    </NoticeByIdContainer>
  );
};
