import { useContext } from "react";
import { NewsContext } from "../../Providers/NewsContexts";
import heart from "../../Assets/heart-01-svgrepo-com.svg";
import { NewsCard } from "../../Components/NewsCard";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export const InternalPage = () => {
  const { selectNews, newsList } = useContext(NewsContext);
  console.log(selectNews);

  return (
    <>
    <Header/>
      <h4>Por:{selectNews?.owner}</h4>
      <h1>{selectNews?.title}</h1>
      <img src={selectNews?.image} alt="" />
      <div>
        <button>
          <img src={heart} alt="" />
        </button>
        <h3>Seja o primeiro a curtir este post</h3>
      </div>
      <p>{selectNews?.description}</p>
      <div>
        <h2>Leia também</h2>
        <ul>
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </ul>
      </div>
      <Footer/>
    </>
  );
};
