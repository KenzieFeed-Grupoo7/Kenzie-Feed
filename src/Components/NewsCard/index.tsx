import { useNavigate } from "react-router-dom";
import { StyledLi } from "./style";
import { INews } from "../../Providers/NewsContexts/@types";
import { StyledParagraph } from "../../Styles/typography";
import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";

interface INewsCardProps {
  news: INews;
}

export const NewsCard = (props: INewsCardProps) => {
  const navigate = useNavigate();

  const { setSelectNews } = useContext(NewsContext);

  const select = () => {
    setSelectNews(props.news);
    navigate(`/InternalPage/${props.news.id}`);
  };

  return (
    <StyledLi>
      <img src={props.news.image} alt="Imagem da noticia" />
      <StyledParagraph fontStyle="sm">Por: {props.news.owner}</StyledParagraph>
      <h3>{props.news.title}</h3>
      <button onClick={select}>Leia Mais</button>
    </StyledLi>
  );
};
