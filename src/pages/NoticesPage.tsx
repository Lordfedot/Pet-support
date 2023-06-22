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
  const [catagoriesState, setCategoriesState] = useState<string>();
  const [fetchedNotices, setFetchedNotices] = useState<INotice[]>();
  const [isNoticeModalOpen, setNoticeModalState] = useState(false);
  const [fullNoticeId, setFullNoticeId] = useState("");
  const [noticeById, setNoticeById] = useState<INotice>();
  const querryHandler = (data: string) => {
    setSearchQuery(data);
  };

  const noticesByTitleFetchHandler = async (title: string) => {
    const notices = await getNoticesByTitle(title);
    if (notices !== null && notices !== undefined && isAuthenticated) {
      const currentUser = await getCurrentUser();
      const updatedList = notices.data.response.map((notice: INotice) => {
        if (currentUser.data.user.favourite.includes(notice._id)) {
          return { ...notice, isInFavourite: true };
        }
        return { ...notice, isInFavourite: false };
      });
      setFetchedNotices(updatedList);
    } else {
      setFetchedNotices(notices.data.response);
    }
  };

  useEffect(() => {
    if (searchQuery !== undefined && searchQuery !== "") {
      noticesByTitleFetchHandler(searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const noticesFetchHandler = async (category: string) => {
    const notices = await getNoticesByCategory(category);

    if (notices !== null && notices !== undefined && isAuthenticated) {
      console.log(11);
      const currentUser = await getCurrentUser();
      const updatedList = notices.data.response.map((notice: INotice) => {
        if (currentUser.data.user.favourite.includes(notice._id)) {
          return { ...notice, isInFavourite: true };
        }
        return { ...notice, isInFavourite: false };
      });
      setFetchedNotices(updatedList);
    } else {
      setFetchedNotices(notices.data.response);
    }
  };

  const favouriteFetchHandler = async () => {
    const notices = await getFavouriteList();
    if (notices !== null && notices !== undefined && isAuthenticated) {
      const currentUser = await getCurrentUser();
      const updatedList = notices.data.response.map((notice: INotice) => {
        if (currentUser.data.user.favourite.includes(notice._id)) {
          return { ...notice, isInFavourite: true };
        }
        return { ...notice, isInFavourite: false };
      });
      setFetchedNotices(updatedList);
    } else {
      setFetchedNotices(notices.data.response);
    }
  };

  useEffect(() => {
    if (catagoriesState === "sell" && searchQuery === "") {
      noticesFetchHandler("sell");
    }
    if (catagoriesState === "lost/found" && searchQuery === "") {
      noticesFetchHandler("lost/found");
    }
    if (catagoriesState === "in good hands" && searchQuery === "") {
      noticesFetchHandler("in good hands");
    }
    if (catagoriesState === "favourite" && searchQuery === "") {
      favouriteFetchHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catagoriesState, searchQuery]);

  const oneNoticeFetchHandler = async (id: string) => {
    const notice = await getNoticesByID(id);

    if (notice !== null && notice !== undefined && isAuthenticated) {
      const currentUser = await getCurrentUser();
      if (currentUser.data.user.favourite.includes(notice.data.response._id)) {
        return setNoticeById({ ...notice.data.response, isInFavourite: true });
      }
      return setNoticeById({ ...notice.data.response, isInFavourite: false });
    } else {
      setNoticeById(notice.data.response);
    }
  };

  useEffect(() => {
    if (isNoticeModalOpen) {
      oneNoticeFetchHandler(fullNoticeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNoticeModalOpen, fullNoticeId]);

  const buttonsStateHandler = (chandedButton: string) => {
    setCategoriesState(chandedButton)
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
