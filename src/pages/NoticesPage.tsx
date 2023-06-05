import NoticesSearch from "../components/notices/NoticesSearch";
import MainTitle from "../components/MainTitle";
import NoticesCategoriesNav from "../components/notices/NoticesCategoriesNav";
import { Section } from "../styles/components/Section.styled";
import { Container } from "../styles/components/Container.styled";
import { useEffect, useState } from "react";
import { INotice } from "../interfaces/INotice";
import {
  getNoticesByCategory,
  getNoticesByID,
  getNoticesByTitle,
} from "../helpers/fetchNotices";
import { NoticesList } from "../components/notices/NoticesList";

const NoticesPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [showModal, setShowModal] = useState(false);

  const [catagoriesState, setCategoriesState] = useState({
    sell: true,
    lostFound: false,
    inGoodHands: false,
    favourite: false,
    myAdds: false,
  });
  const [fetchedNotices, setFetchedNotices] = useState<Array<INotice>>();
  const [isNoticeModalOpen, setNoticeModalState] = useState({
    isNoticeOpen: false,
    noticeId: "",
  });
  const [noticeById, setNoticeById] = useState<INotice>();

  const querryHandler = (data: string) => {
    setSearchQuery(data);
  };

  const noticesByTitleFetchHandler = async (title: string) => {
    const notices = await getNoticesByTitle(title);
    setFetchedNotices(notices.data.response);
  };

  useEffect(() => {
    if (searchQuery !== undefined && searchQuery !== '') {
      noticesByTitleFetchHandler(searchQuery);
    }
  }, [searchQuery]);

  const noticesFetchHandler = async (category: string) => {
    const notices = await getNoticesByCategory(category);
    console.log(notices);
    setFetchedNotices(notices.data.response);
  };

  useEffect(() => {
    if (catagoriesState.sell === true && searchQuery === '') {
      noticesFetchHandler("sell");
    }
    if (catagoriesState.lostFound === true && searchQuery === "") {
      noticesFetchHandler("lost/found");
    }
    if (catagoriesState.inGoodHands === true && searchQuery === "") {
      noticesFetchHandler("in good hands");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catagoriesState, searchQuery]);

  const oneNoticeFetchHandler = async (id: string) => {
    const notice = await getNoticesByID(id);
    setNoticeById(notice.data.response);
  };

  useEffect(() => {
    if (isNoticeModalOpen.isNoticeOpen) {
      oneNoticeFetchHandler(isNoticeModalOpen.noticeId);
    }
  }, [isNoticeModalOpen]);

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
    setNoticeModalState(data);
  };

  return (
    <Section>
      <Container>
        <MainTitle>Find your favorite pet</MainTitle>
        <NoticesSearch querryHandler={querryHandler} />
        <NoticesCategoriesNav
          buttonsStateHandler={buttonsStateHandler}
          setShowModal={setShowModal}
          showModal={showModal}
          noticeById={noticeById}
          setNoticeModalState={setNoticeModalState}
          isNoticeModalOpen={isNoticeModalOpen}
        />
        {fetchedNotices && (
          <NoticesList
            fetchedNotices={fetchedNotices}
            noticeLearnMoreHandler={noticeLearnMoreHandler}
          ></NoticesList>
        )}
      </Container>
    </Section>
  );
};

export default NoticesPage;
