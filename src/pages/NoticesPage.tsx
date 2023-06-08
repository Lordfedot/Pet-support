import NoticesSearch from "../components/notices/NoticesSearch";
import MainTitle from "../components/MainTitle";
import NoticesCategoriesNav from "../components/notices/NoticesCategoriesNav";
import { Section } from "../styles/components/Section.styled";
import { Container } from "../styles/components/Container.styled";
import { useEffect, useState } from "react";
import { INotice } from "../interfaces/INotice";
import {
  getCurrentUser,
  getFavouriteList,
  getNoticesByCategory,
  getNoticesByID,
  getNoticesByTitle,
} from "../helpers/fetchNotices";
import { NoticesList } from "../components/notices/NoticesList";
import { useAppSelector } from "../redux/selector";

const NoticesPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [catagoriesState, setCategoriesState] = useState({
    sell: true,
    lostFound: false,
    inGoodHands: false,
    favourite: false,
    myAdds: false,
  });
  const [fetchedNotices, setFetchedNotices] = useState<Array<INotice>>();
  const [isNoticeModalOpen, setNoticeModalState] = useState(false);
  const [fullNoticeId, setFullNoticeId] = useState("");
  const [noticeById, setNoticeById] = useState<INotice>();

  const querryHandler = (data: string) => {
    setSearchQuery(data);
  };

  const noticesByTitleFetchHandler = async (title: string) => {
    const notices = await getNoticesByTitle(title);
    const currentUser = await getCurrentUser();
    if (notices !== null && notices !== undefined) {
      const updatedList = notices.data.response.map((notice: INotice) => {
        if (currentUser.data.user.favourite.includes(notice._id)) {
          return { ...notice, isInFavourite: true };
        }
        return { ...notice, isInFavourite: false };
      });
      setFetchedNotices(updatedList);
    }
  };

  useEffect(() => {
    if (searchQuery !== undefined && searchQuery !== "") {
      noticesByTitleFetchHandler(searchQuery);
    }
  }, [searchQuery]);

  const noticesFetchHandler = async (category: string) => {
    const notices = await getNoticesByCategory(category);
    console.log(notices);
    const currentUser = await getCurrentUser();
    if (notices !== null && notices !== undefined) {
      const updatedList = notices.data.response.map((notice: INotice) => {
        if (currentUser.data.user.favourite.includes(notice._id)) {
          return { ...notice, isInFavourite: true };
        }
        return { ...notice, isInFavourite: false };
      });
      setFetchedNotices(updatedList);
    }
  };

  const favouriteFetchHandler = async () => {
    const notices = await getFavouriteList();
    const currentUser = await getCurrentUser();
    if (notices !== null && notices !== undefined) {
      const updatedList = notices.data.response.map((notice: INotice) => {
        if (currentUser.data.user.favourite.includes(notice._id)) {
          return { ...notice, isInFavourite: true };
        }
        return { ...notice, isInFavourite: false };
      });
      setFetchedNotices(updatedList);
    }
  };

  useEffect(() => {
    if (catagoriesState.sell === true && searchQuery === "") {
      noticesFetchHandler("sell");
    }
    if (catagoriesState.lostFound === true && searchQuery === "") {
      noticesFetchHandler("lost/found");
    }
    if (catagoriesState.inGoodHands === true && searchQuery === "") {
      noticesFetchHandler("in good hands");
    }
    if (catagoriesState.favourite === true && searchQuery === "") {
      favouriteFetchHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catagoriesState, searchQuery]);

  const oneNoticeFetchHandler = async (id: string) => {
    const notice = await getNoticesByID(id);
    const currentUser = await getCurrentUser();
    if (notice !== null && notice !== undefined) {
      if (currentUser.data.user.favourite.includes(notice.data.response._id)) {
        setNoticeById({ ...notice.data.response, isInFavourite: true });
      }
      setNoticeById({ ...notice.data.response, isInFavourite: false });
    }
  };

  useEffect(() => {
    if (isNoticeModalOpen) {
      oneNoticeFetchHandler(fullNoticeId);
    }
  }, [isNoticeModalOpen, fullNoticeId]);

  const buttonsStateHandler = (chandedButton: string, buttonState: boolean) => {
    switch (chandedButton) {
      case "sell":
        setCategoriesState({
          sell: true,
          lostFound: false,
          inGoodHands: false,
          favourite: false,
          myAdds: false,
        });
        break;
      case "lost/found":
        setCategoriesState({
          sell: false,
          lostFound: true,
          inGoodHands: false,
          favourite: false,
          myAdds: false,
        });
        break;
      case "in good hands":
        setCategoriesState({
          sell: false,
          lostFound: false,
          inGoodHands: true,
          favourite: false,
          myAdds: false,
        });
        break;
      case "favourite adds":
        setCategoriesState({
          sell: false,
          lostFound: false,
          inGoodHands: false,
          favourite: true,
          myAdds: false,
        });
        break;
      case "my adds":
        setCategoriesState({
          sell: false,
          lostFound: false,
          inGoodHands: false,
          favourite: false,
          myAdds: true,
        });
        break;
      default:
        break;
    }
  };

  const noticeLearnMoreHandler = (data: {
    isNoticeOpen: boolean;
    noticeId: string;
  }) => {
    setNoticeModalState(data.isNoticeOpen);
    setFullNoticeId(data.noticeId);
  };

  return (
    <Section>
      <Container>
        <MainTitle>Find your favorite pet</MainTitle>
        <NoticesSearch querryHandler={querryHandler} />
        <NoticesCategoriesNav
          isAuthenticated={isAuthenticated}
          buttonsStateHandler={buttonsStateHandler}
          setShowModal={setShowModal}
          showModal={showModal}
          noticeById={noticeById}
          setNoticeModalState={setNoticeModalState}
          isNoticeModalOpen={isNoticeModalOpen}
        />
        {fetchedNotices && (
          <NoticesList
            isAuthenticated={isAuthenticated}
            fetchedNotices={fetchedNotices}
            noticeLearnMoreHandler={noticeLearnMoreHandler}
          ></NoticesList>
        )}
      </Container>
    </Section>
  );
};

export default NoticesPage;
