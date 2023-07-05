import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserNewsList } from "./UserNews/UserNewsList/index.tsx";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <h1>Suas Publicações</h1>
            <button>Novo Post</button>
          </div>
          <UserNewsList />
        </section>
      </main>
      <Footer />
    </>
  );
};
