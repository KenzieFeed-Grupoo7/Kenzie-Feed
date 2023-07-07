import { useNavigate } from "react-router-dom";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import { useContext } from "react";
import { StyledLi } from "./style";
import { INews } from "../../Providers/NewsContexts/@types";

interface INewsCardProps {
  news: INews;
}

export const NewsCard = ({ news }: INewsCardProps) => {
  const { setSelectNews } = useContext(NewsContext);
  const navigate = useNavigate();
  const select = () => {
    setSelectNews(news);
    navigate("/InternalPage");
  };

  return (
    <StyledLi>
      <img src={news.image} alt="Imagem da noticia" />
      <h3>Por: {news.owner}</h3>
      <h3>{news.title}</h3>
      <button onClick={select}>Leia Mais</button>
    </StyledLi>
  );
};
