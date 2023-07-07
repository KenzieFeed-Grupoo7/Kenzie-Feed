import { useNavigate } from "react-router-dom";
import { StyledLi } from "./style";
import { INews } from "../../Providers/NewsContexts/@types";
import { StyledParagraph } from "../../Styles/typography";
import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";

interface INewsCardProps {
  news: INews;
}

export const NewsCard = ({ news }: INewsCardProps) => {
  const navigate = useNavigate();

  const { setSelectNews } = useContext(NewsContext)

  const select = () => {
    console.log("clicou")
    setSelectNews(news)
    navigate(`/InternalPage/${news.id}`);
  };

  return (
    <StyledLi>
      <img src={news.image} alt="Imagem da noticia" />
      <StyledParagraph fontStyle="sm">Por: {news.owner}</StyledParagraph>
      <h3>{news.title}</h3>
      <button onClick={select}>Leia Mais</button>
    </StyledLi>
  );
};
