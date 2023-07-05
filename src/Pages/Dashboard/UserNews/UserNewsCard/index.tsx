import { INews } from "../../../../Providers/NewsContexts/@types.ts";
import { StyledCard } from "./index.ts";

interface IUserNewsCardProps {
  news: INews;
}

export const UserNewsCard = ({ news }: IUserNewsCardProps) => {
  return (
    <StyledCard>
      <img src={news.image} alt="imagem referente a notícia" />
      <p>{news.description}</p>
      <div>
        <button>Editar</button>
        <button>EXcluir</button>
      </div>
    </StyledCard>
  );
};
