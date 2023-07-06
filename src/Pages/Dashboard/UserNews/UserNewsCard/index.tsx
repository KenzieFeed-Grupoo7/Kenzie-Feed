import { useContext } from "react";
import { INews } from "../../../../Providers/NewsContexts/@types.ts";
import { StyledTitleThree } from "../../../../Styles/typography.ts";
import { StyledCard } from "./index.ts";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";

interface IUserNewsCardProps {
  news: INews;
}

export const UserNewsCard = ({ news }: IUserNewsCardProps) => {
  const { deletePost } = useContext(NewsContext);

  return (
    <StyledCard>
      <img src={news.image} alt="imagem referente a notícia" />
      <p>{news.description}</p>
      <div>
        <button>Editar</button>
        <button onClick={() => deletePost(Number(news.id))}>Excluir</button>
      </div>
    </StyledCard>
  );
};
