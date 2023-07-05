import { StyledList } from "./index.ts";
import { UserNewsCard } from "../UserNewsCard/index.tsx";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";
import { UserContext } from "../../../../Providers/UserContexts/UserContexts.tsx";

export const UserNewsList = () => {
  const { userNewsList } = useContext(NewsContext);
  console.log(userNewsList);

  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <StyledList>
      {userNewsList.map((news) => (
        <UserNewsCard key={news.id} news={news} />
      ))}

      {userNewsList.length > 0 ? null : <p>Você ainda não tem publicações.</p>}
    </StyledList>
  );
};
