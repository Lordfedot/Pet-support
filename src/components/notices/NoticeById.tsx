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
type NoticeProps = {
  data: INotice;
};

export const NoticesById = ({ data }: NoticeProps) => {
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
              <NoticeByIdContacts href="mailto: 1@gmai.com">
                1@gmai.com
              </NoticeByIdContacts>
            </NoticeByIdDescriptionListItem>
            <NoticeByIdDescriptionListItem>
              <NoticeByIdFieldDescription>Phone:</NoticeByIdFieldDescription>
              <NoticeByIdContacts href="tel: +111-11-11">
                111-11-11
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </NoticeByIdComentsData>
      </NoticeByIdComents>
      <NoticeByIdButtonsList>
        <li>
          <NoticeByIdAddToButton>Add to ❤️</NoticeByIdAddToButton>
        </li>
        <li>
          <NoticeByIdContactButton href="tel: +111-11-11">Contact</NoticeByIdContactButton>
        </li>
      </NoticeByIdButtonsList>
    </NoticeByIdContainer>
  );
};
