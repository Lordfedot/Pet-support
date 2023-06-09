import { updateFavouriteList } from "../../helpers/fetchNotices";
import { INotice } from "../../interfaces/INotice";
import {
  AddFavouriteButton,
  LearnMoreButton,
  NoticeCategory,
  NoticeDescriptionContainer,
  NoticeDescriptionItem,
  NoticeDescriptionList,
  NoticeTitle,
  Notices,
  NoticesAvatar,
  NoticesItem,
} from "../../styles/components/notices/NoticeList.styled";
import { Icon } from "../svgIcon";

type ListProps = {
  fetchedNotices: Array<INotice>;
  noticeLearnMoreHandler: (data: {
    isNoticeOpen: boolean;
    noticeId: string;
  }) => void;
  isAuthenticated: boolean;
};

export const NoticesList = ({
  fetchedNotices,
  noticeLearnMoreHandler,
  isAuthenticated,
}: ListProps) => {
  const onAddToFavouriteClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const response = await updateFavouriteList(e.currentTarget.id);
    console.log(response.data);

    window.alert(response.data.message);
  };

  const onLoadMoreClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    noticeLearnMoreHandler({
      isNoticeOpen: true,
      noticeId: e.currentTarget.id,
    });
  };
  return (
    <Notices>
      {fetchedNotices.map((notice) => {
        return (
          <NoticesItem key={notice._id}>
            <NoticeCategory>{notice.category}</NoticeCategory>
            <NoticesAvatar
              src={notice.avatar ? notice.avatar : ""}
              alt="avatar"
            />
            {isAuthenticated && (
              <AddFavouriteButton
                id={notice._id}
                onClick={onAddToFavouriteClick}
              >
                <Icon
                  iconId={
                    notice.isInFavourite === true
                      ? "iconFavourite"
                      : "iconNotFavourite"
                  }
                  width={28}
                  height={28}
                ></Icon>
              </AddFavouriteButton>
            )}
            <NoticeDescriptionContainer>
              <NoticeTitle>{notice.title}</NoticeTitle>
              <NoticeDescriptionList>
                <NoticeDescriptionItem>
                  Breed:{notice.breed}
                </NoticeDescriptionItem>
                <NoticeDescriptionItem>
                  Place:{notice.place}
                </NoticeDescriptionItem>
                <NoticeDescriptionItem>
                  Age:{notice.dateOfBirth}
                </NoticeDescriptionItem>
                {notice.price && (
                  <NoticeDescriptionItem>
                    Price: {notice.price}
                  </NoticeDescriptionItem>
                )}
              </NoticeDescriptionList>
              <LearnMoreButton id={notice._id} onClick={onLoadMoreClick}>
                Learn More
              </LearnMoreButton>
            </NoticeDescriptionContainer>
          </NoticesItem>
        );
      })}
    </Notices>
  );
};
