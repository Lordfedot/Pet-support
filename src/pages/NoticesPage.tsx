import NoticesSearch from "../components/NoticesSearch";
import MainTitle from "../components/MainTitle";
import NoticesCategoriesNav from "../components/NoticesCategoriesNav";

const NoticesPage = () => {
  return (
    <>
      <MainTitle>Find your favorite pet</MainTitle>
      <NoticesSearch />
      <NoticesCategoriesNav />
    </>
  );
};

export default NoticesPage;
