import { useContext, useEffect } from "react";
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

  const userId = Number(localStorage.getItem("@USERID"));
  const newsId = Number(selectNews?.id);

  const likeFind = selectNews?.likes?.find(
    (like) => like.userId == Number(userId)
  );
  const likeCheck = likeFind ? true : false;

  const footerNews = newsList.filter((news) => news.id !== selectNews?.id);

  console.log(selectNews);

  const res = {
    userId: userId,
    postId: newsId,
  };

  function registerLike() {
    if (!likeCheck) {
      like(res);
      console.log("curtiu");
    } else {
      deslike(likeFind?.id!, res.postId);
      console.log("descurtiu");
    }
  }
  return (
    <>
      <Header />
      <StyledMain>
        <h4>Por:{selectNews?.owner}</h4>
        <h1>{selectNews?.title}</h1>
        <figure>
          <img className="mainImg" src={selectNews?.image} alt="" />
        </figure>
        <div className="likeContainer">
          {userId ? (
            <button onClick={() => registerLike()}>
              <img src={heart} alt="" />
            </button>
          ) : (
            <h3>Faça login para poder curtir este post</h3>
          )}
          {userId ? (
            selectNews?.likes?.length == 0 ? (
              <h3>Seja o primeiro a curtir este post</h3>
            ) : (
              <h3>{selectNews?.likes?.length} curtidas</h3>
            )
          ) : null}
        </div>
        <p>{selectNews?.description}</p>
        <div>
          <h2>Leia também</h2>
          <ul>
            {footerNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </ul>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
