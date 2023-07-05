import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import { NewsCard } from "../../Components/NewsCard";
import homeImage from "../../Assets/Rectangle 11.png";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StyledDiv } from "./style";
import { StyledContainer } from "../../Styles/container";
import { Link } from "react-router-dom";
import { StyledParagraph, StyledTitleOne, StyledTitleTwo } from "../../Styles/typography";

export const HomePage = () => {
  const { newsList } = useContext(NewsContext);

  return (
    <>
      <Header />
      <StyledDiv>
        <StyledContainer className="newsContainer">
          <StyledParagraph fontStyle="sm">KENZIE FEED</StyledParagraph>
          <StyledTitleOne>Seja muito bem vindo ao KenzieFeed</StyledTitleOne>
          <StyledParagraph fontStyle="lg">Fique por dentro das últimas notícias</StyledParagraph>
          <img src={homeImage} alt="" />
          <div>
            <StyledTitleTwo>Últimas notícias</StyledTitleTwo>
            <Link to ="/homenews" className="linkBtn">Ver tudo</Link>
          </div>
          <ul>
            {newsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </ul>
        </StyledContainer>
      </StyledDiv>
      <Footer />
    </>
  );
};
