import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import { NewsCard } from "../../Components/NewsCard";
import homeImage from "../../Assets/Rectangle 11.png";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledContainer } from "../../Styles/container";
import { Link } from "react-router-dom";
import {
  StyledParagraph,
  StyledTitleOne,
  StyledTitleThree,
  StyledTitleTwo,
} from "../../Styles/typography";
import { StyledMain } from "./style";

export const HomePage = () => {
  const { newsList } = useContext(NewsContext);

  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer className="news__container">
          <div className="news__header">
            <StyledTitleThree>KENZIE FEED</StyledTitleThree>
            <StyledTitleOne>Seja muito bem vindo ao KenzieFeed</StyledTitleOne>
            <StyledParagraph fontStyle="lg">
              Fique por dentro das últimas notícias
            </StyledParagraph>
            <img src={homeImage} alt="" />
          </div>
          <div className="news__last">
            <StyledTitleTwo>Últimas notícias</StyledTitleTwo>
            <div className="news__last-button">
              <Link to="/homenews" className="linkBtn">
                Ver tudo
              </Link>
            </div>
          </div>
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
