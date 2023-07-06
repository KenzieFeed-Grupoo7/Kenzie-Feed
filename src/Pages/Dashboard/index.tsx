import { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserNewsList } from "./UserNews/UserNewsList/index.tsx";
import { CreateNewsModal } from "./CreateNewsModal/index.tsx";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts.tsx";

export const DashboardPage = () => {
  const { isOpen, openModal } = useContext(NewsContext);

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <h1>Suas Publicações</h1>
            <button onClick={openModal}>Novo Post</button>
          </div>
          {isOpen ? <CreateNewsModal /> : null}
          <UserNewsList />
        </section>
      </main>
      <Footer />
    </>
  );
};
