import { useContext } from "react";
import { INews } from "../../../../Providers/NewsContexts/@types.ts";
import { StyledTitleThree } from "../../../../Styles/typography.ts";
import { StyledCard } from "./style.ts";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";
import deleteImg from "../../../../Assets/delete.svg";
import editImg from "../../../../Assets/edit.svg";

interface IUserNewsCardProps {
  news: INews;
}

export const UserNewsCard = ({ news }: IUserNewsCardProps) => {
  const { deletePost } = useContext(NewsContext);

  return (
    <StyledCard>
      <div className="img__container">
        <img src={news.image} alt="imagem referente a notícia" />
        <StyledTitleThree>{news.description}</StyledTitleThree>
      </div>

      <div className="button__container">
        <button>
          <img src={editImg} alt="imagem editar" />
        </button>
        <button onClick={() => deletePost(Number(news.id))}>
          <img src={deleteImg} alt="imagem editar" />
        </button>
      </div>
    </StyledCard>
  );
};
