import { StyledList } from "./style.ts";
import { UserNewsCard } from "../UserNewsCard/index.tsx";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";

export const UserNewsList = () => {
  const { userNewsList } = useContext(NewsContext);

  return (
    <StyledList>
      {userNewsList.map((news) =>
        news.userId ? <UserNewsCard key={news.id} news={news} /> : null
      )}
      {userNewsList.length > 0 ? null : <p>Você ainda não tem publicações.</p>}
    </StyledList>
  );
};
