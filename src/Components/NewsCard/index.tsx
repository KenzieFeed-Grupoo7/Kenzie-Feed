import { INews } from "../../Providers/NewsContexts/NewsContexts"
import { useNavigate } from "react-router-dom";
import { INews, NewsContext } from "../../Providers/NewsContexts"
import { useContext } from "react";

interface INewsCardProps{
    news:INews;
}

export const NewsCard = ({news}: INewsCardProps) =>{
    const { setSelectNews } = useContext(NewsContext)
    const navigate = useNavigate()
    const select = () =>{
        setSelectNews(news)
        navigate("/InternalPage")
    }
    
    return(
        <li>
            <img src={news.image} alt="Imagem da noticia" />
            <h3>Por: {news.owner}</h3>
            <h3>{news.title}</h3>
            <button onClick={select}>Leia Mais</button>
        </li>
    )
}