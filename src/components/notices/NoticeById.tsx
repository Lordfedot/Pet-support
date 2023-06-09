import { updateFavouriteList } from "../../helpers/fetchNotices";
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
} from "../../styles/components/notices/NoticeById.styled";
import { Icon } from "../svgIcon";
type NoticeProps = {
  data: INotice;
  isAuthenticated: boolean;
};

export const NoticesById = ({ data, isAuthenticated }: NoticeProps) => {
  const onAddToFavouriteClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const response = await updateFavouriteList(e.currentTarget.id);
    console.log(response.data);

    window.alert(response.data.message);
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
              <NoticeByIdContacts href={data.ownerEmail ? data.ownerEmail : ""}>
                {data.ownerEmail ? data.ownerEmail : ""}
              </NoticeByIdContacts>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Phone:</NoticeByIdFieldDescription>
              <NoticeByIdContacts href={data.ownerPhone ? data.ownerPhone : ""}>
                {data.ownerEmail ? data.ownerEmail : ""}
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
            > {data.isInFavourite === true ? "Add to" : "Remove from"}
              <Icon iconId={"iconFavourite"} width={16} height={16}></Icon>
            </NoticeByIdAddToButton>
          </li>
        )}
        <li>
          <NoticeByIdContactButton href="tel: +111-11-11">
            Contact
          </NoticeByIdContactButton>
        </li>
      </NoticeByIdButtonsList>
    </NoticeByIdContainer>
  );
};
