import NoticesSearch from "../components/NoticesSearch";
import MainTitle from "../components/MainTitle";
import NoticesCategoriesNav from "../components/NoticesCategoriesNav";
import { Section } from "../styles/components/Section.styled";
import { Container } from "../styles/components/Container.styled";
const NoticesPage = () => {
  return (
    <Section>
      <Container>
        <MainTitle>Find your favorite pet</MainTitle>
        <NoticesSearch />
        <NoticesCategoriesNav />
      </Container>
    </Section>
  );
};

export default NoticesPage;
