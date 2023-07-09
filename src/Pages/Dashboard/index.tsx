import { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserNewsList } from "./UserNews/UserNewsList/index.tsx";
import { CreateNewsModal } from "./CreateNewsModal/index.tsx";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts.tsx";
import { StyledMain } from "./style.ts";
import newPost from "../../Assets/newPost.svg";
import { StyledButton } from "../../Styles/buttons.ts";
import { StyledTitleTwo } from "../../Styles/typography.ts";
import { StyledContainer } from "../../Styles/container.ts";

export const DashboardPage = () => {
  const { isOpen, openModal } = useContext(NewsContext);

  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer className="dashboard__container">
          <div className="dashboard__header">
            <StyledTitleTwo>Suas Publicações</StyledTitleTwo>
            <div className="header__button">
              <StyledButton size="sm" onClick={openModal}>
                <img src={newPost} alt="simbolo mais" />
                Novo Post
              </StyledButton>
            </div>
          </div>
          {isOpen ? <CreateNewsModal /> : null}
          <UserNewsList />
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
};
