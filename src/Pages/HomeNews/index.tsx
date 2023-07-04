import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import { NewsCard } from "../../components/NewsCard";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export const HomeNews = () => {
  const { newsList } = useContext(NewsContext);
  return (
    <>
      <Header/>
      <ul>
        {newsList.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </ul>
      <Footer/>
    </>
  );
};
