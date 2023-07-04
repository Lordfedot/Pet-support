import { useEffect, useState } from "react";
import { getNews } from "../helpers/Api";
import { News } from "../interfaces/News";
import MainTitle from "../components/MainTitle";
import { Section } from "../styles/components/Section.styled";
import { Container } from "../styles/components/Container.styled";
import Loader from "../components/Loader";
import NewsItem from "../components/News/NewsItem";
import { NewsList } from "../components/News/News.styled";
import SearchNews from "../components/News/SearchNews";

const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [searchedNews, setSearchedNews] = useState<News[]>([]);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    const data = async () => {
      const result = await getNews();

      setNews(result?.data.response);
      setSearchedNews(result?.data.response);
      setStatus("resolved");
    };
    data();
  }, []);
  useEffect(() => {
    const filtered = news.filter((item) => item.title.includes(value));
    setSearchedNews(filtered);
  }, [news, value]);
  return (
    <>
      {status === "idle" && <></>}
      <Section>
        <Container>
          {status === "pending" && <Loader />}
          {status === "resolved" && (
            <>
              <MainTitle>News</MainTitle>
              <SearchNews getValue={setValue} />
              <NewsList>
                {searchedNews.map((item: News) => (
                  <NewsItem item={item} key={item._id} />
                ))}
              </NewsList>
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default NewsPage;
