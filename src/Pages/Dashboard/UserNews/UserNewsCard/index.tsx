import { useContext } from "react";
import { INews } from "../../../../Providers/NewsContexts/@types.ts";
import { StyledTitleThree } from "../../../../Styles/typography.ts";
import { StyledCard } from "./index.ts";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";
import edit from "../../../../Assets/edit.svg";
import deleteImg from "../../../../Assets/delete.svg";

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
          <img src={edit} alt="imagem editar" />
        </button>
        <button onClick={() => deletePost(Number(news.id))}>
          <img src={deleteImg} alt="imagem editar" />
        </button>
      </div>
    </StyledCard>
  );
};
