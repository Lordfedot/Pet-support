import { News } from "../../interfaces/News";
import img from '../../images/image 4.png'
import { NewsImg,NewsDate,NewsLi,NewsText,NewsTitle,NewsWrapper } from "./News.styled";
type Props = {
  item: News;
};
const NewsItem = ({ item }: Props) => {
  const { date, source, text, title } = item;
  return (
    <NewsLi>
      <NewsImg src={img} alt={title} />
      <NewsTitle>{title}</NewsTitle>
      <NewsText>{text}</NewsText>
      <NewsWrapper>
        <NewsDate>{date}</NewsDate>
        <NewsDate>{source}</NewsDate>
      </NewsWrapper>
    </NewsLi>
  );
};

export default NewsItem;
