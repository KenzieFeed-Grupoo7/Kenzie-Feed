import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts.tsx";
import { NewsCard } from "../../Components/NewsCard";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledContainer } from "../../Styles/container";
import { StyledUl } from "./style.ts";

export const HomeNews = () => {
  const { newsList } = useContext(NewsContext);
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledUl>
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </StyledUl>
      </StyledContainer>
      <Footer />
    </>
  );
};
