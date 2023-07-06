import { useContext, useState } from "react";
import { NewsContext } from "../../Providers/NewsContexts/NewsContexts";
import heart from "../../Assets/heart-01-svgrepo-com.svg";
import { NewsCard } from "../../Components/NewsCard";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { StyledMain } from "./style";
import { INews } from "../../Providers/NewsContexts/@types";
import { useParams } from "react-router-dom";

export const InternalPage = () => {
  const {id} = useParams();
  const { newsList, like, deslike, getNewById } = useContext(NewsContext);
  const selectNews = getNewById(id)
    const [liked, setLiked] = useState(false);
    const likeArr = selectNews.likes
    const userId = Number(localStorage.getItem("@TOKEN"))
    const newsId = Number(selectNews.id)
    const res ={
      userId:userId,
      postId:newsId
    }
    console.log(newsId)

    function registerLike() {
      console.log(res)
      setLiked(true);
      if (liked) {
          like(res);
      } else {
        if(selectNews?.id){
          deslike(selectNews.id);
        }
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
            <button onClick={()=>registerLike()}>
              <img src={heart} alt="" />
            </button>
             {likeArr ? likeArr+" curtidas": <h3>Seja o primeiro a curtir este post</h3>} 
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
