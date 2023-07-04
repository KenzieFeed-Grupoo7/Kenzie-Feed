import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import { NewsCard } from "../../Components/NewsCard";
import homeImage from "../../Assets/Rectangle 11.png";

export const HomePage = () => {
  const { newsList } = useContext(NewsContext);
  return (
    <>
      <h3>Kenzie feed</h3>
      <h1>Seja muito bem vindo ao KenzieFeed</h1>
      <h2>Fique por dentro das últimas notícias</h2>
      <img src={homeImage} alt="" />
      <ul>
        {newsList.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </ul>
    </>
  );
};
