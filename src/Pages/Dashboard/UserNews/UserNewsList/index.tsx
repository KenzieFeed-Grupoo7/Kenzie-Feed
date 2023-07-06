import { StyledList } from "./index.ts";
import { UserNewsCard } from "../UserNewsCard/index.tsx";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";
import { UserContext } from "../../../../Providers/UserContexts/UserContexts.tsx";

export const UserNewsList = () => {
  const { userNewsList } = useContext(NewsContext);
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <StyledList>
      {userNewsList.map((news) =>
        news.userId ? <UserNewsCard key={news.id} news={news} /> : null
      )}
      {userNewsList.length > 0 ? null : <p>Você ainda não tem publicações.</p>}
    </StyledList>
  );
};
