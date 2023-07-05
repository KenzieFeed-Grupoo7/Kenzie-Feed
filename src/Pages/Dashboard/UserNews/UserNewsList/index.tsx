import { StyledList } from "./index.ts";
import { UserNewsCard } from "../UserNewsCard/index.tsx";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";

export const UserNewsList = () => {
  const { newsList, userNewsList } = useContext(NewsContext);

  return (
    <StyledList>
      {userNewsList.map((news) => (
        <UserNewsCard key={news.id} news={news} />
      ))}
      {newsList.length <= 0 ? null : <p>Você ainda não tem publicações.</p>}
    </StyledList>
  );
};
