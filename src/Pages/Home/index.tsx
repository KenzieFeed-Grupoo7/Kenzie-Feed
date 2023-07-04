import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import { NewsCard } from "../../Components/NewsCard";
import homeImage from "../../Assets/Rectangle 11.png";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledDiv } from "./style";

export const HomePage = () => {
  const { newsList } = useContext(NewsContext);
  return (
    <>
      <Header />
      <StyledDiv>
        <h3>Kenzie feed</h3>
        <h1>Seja muito bem vindo ao KenzieFeed</h1>
        <h2>Fique por dentro das últimas notícias</h2>
        <img src={homeImage} alt="" />
        <div>
          <h2>Últimas notícias</h2>
        </div>
        <ul>
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </ul>
      </StyledDiv>
      <Footer />
    </>
  );
};
