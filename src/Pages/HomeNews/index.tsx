import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts.tsx";
import { NewsCard } from "../../Components/NewsCard";
import { Header } from "../../Components/Header";
import { StyledContainer } from "../../Styles/container";
import { StyledMain } from "./style.ts";
import { StyledTitleOne } from "../../Styles/typography.ts";
import { Footer } from "../../Components/Footer/index.tsx";

export const HomeNews = () => {
  const { newsList } = useContext(NewsContext);
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer className="homeNews__container">
          <StyledTitleOne>Todas as Notícias</StyledTitleOne>
          <ul>
            {newsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </ul>
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
};
