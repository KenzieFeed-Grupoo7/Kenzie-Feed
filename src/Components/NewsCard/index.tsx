import { INews } from "../../Providers/NewsContexts"

interface INewsCardProps{
    news:INews;
}

export const NewsCard = ({news}: INewsCardProps) =>{
    return(
        <li>
            <img src={news.image} alt="Imagem da noticia" />
            <h3>Por: {news.owner}</h3>
            <h3>{news.title}</h3>
            <h4>Leia Mais</h4>
        </li>
    )
}