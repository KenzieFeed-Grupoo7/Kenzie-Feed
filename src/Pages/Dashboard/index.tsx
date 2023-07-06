import { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserNewsList } from "./UserNews/UserNewsList/index.tsx";
import { CreateNewsModal } from "./CreateNewsModal/index.tsx";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts.tsx";
import { StyledMain } from "./index.ts";
import newPost from "../../Assets/newPost.svg";
import { StyledButton } from "../../Styles/buttons.ts";
import { StyledTitleTwo } from "../../Styles/typography.ts";

export const DashboardPage = () => {
  const { isOpen, openModal } = useContext(NewsContext);

  return (
    <>
      <Header />
      <StyledMain>
        <section>
          <div>
            <StyledTitleTwo>Suas Publicações</StyledTitleTwo>
            <StyledButton size="sm" onClick={openModal}>
              <img src={newPost} alt="simbolo mais" />
              Novo Post
            </StyledButton>
          </div>
          {isOpen ? <CreateNewsModal /> : null}
          <UserNewsList />
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
