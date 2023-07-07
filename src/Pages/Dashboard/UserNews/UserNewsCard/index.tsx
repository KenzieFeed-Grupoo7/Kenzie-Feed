import { useContext } from "react";
import { INews } from "../../../../Providers/NewsContexts/@types.ts";
import { StyledTitleThree } from "../../../../Styles/typography.ts";
import { StyledCard } from "./style.ts";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";
import edit from "../../../../Assets/edit.svg";
import deleteImg from "../../../../Assets/delete.svg";
import { Link } from "react-router-dom";

interface IUserNewsCardProps {
  news: INews;
}

export const UserNewsCard = ({ news }: IUserNewsCardProps) => {
  const { deletePost } = useContext(NewsContext);
  console.log(news);
  return (
    <StyledCard>
      <div className="img__container">
        <img src={news.image} alt="imagem referente a notícia" />
        <StyledTitleThree>{news.description}</StyledTitleThree>
      </div>

      <div className="button__container">
        <Link to={`/edit/${news.id}`}>
          <img src={edit} alt="imagem editar" />
        </Link>
        <button onClick={() => deletePost(Number(news.id))}>
          <img src={deleteImg} alt="imagem editar" />
        </button>
      </div>
    </StyledCard>
  );
};
