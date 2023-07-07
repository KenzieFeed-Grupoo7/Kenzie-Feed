import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import heart from "../../Assets/heart-01-svgrepo-com.svg";
import { NewsCard } from "../../Components/NewsCard";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { StyledMain } from "./style";
import { useParams } from "react-router-dom";

export const InternalPage = () => {
  const { id } = useParams();
  const { newsList, like, deslike, getNewById, selectNews } =
    useContext(NewsContext);
  useEffect(() => {
    getNewById(Number(id));
  }, []);
  const [liked, setLiked] = useState(true);
  const likeArr = selectNews?.likes;
  const userId = Number(localStorage.getItem("@USERID"));
  const newsId = Number(selectNews?.id);

  const res = {
    userId: userId,
    postId: newsId,
  };

  function registerLike() {
    if (liked) {
      setLiked(false);
      like(res);
    } else {
      setLiked(true);
      deslike(newsId);
    }
  }
  return (
    <>
      <Header />
      <StyledMain>
        <h4>Por:{selectNews?.owner}</h4>
        <h1>{selectNews?.title}</h1>
        <img className="mainImg" src={selectNews?.image} alt="" />
        <div className="likeContainer">
          {userId ? (
            <button onClick={() => registerLike()}>
              <img src={heart} alt="" />
            </button>
          ) : likeArr ? (
            likeArr + " curtidas"
          ) : (
            <h3>Seja o primeiro a curtir este post</h3>
          )}
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
      </StyledMain>
      <Footer />
    </>
  );
};
