import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../Services/Api";

export const NewsContext = createContext({} as INewsContext);

interface INewsProviderProps{
    children: React.ReactNode;
}

 export interface INews{
    title:string;
    description:string;
    owner:string;
    userId:number;
    id:number;
    image:string;
    likes:any[];
}

interface INewsContext{
    loading: boolean
    newsList: INews[]
    selectNews: undefined|INews
    setSelectNews: Dispatch<SetStateAction<undefined | INews>>
}

export const NewsProvider = ({children}: INewsProviderProps) => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectNews,setSelectNews] = useState<INews>();

  useEffect(() => {
    const loadNewsData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/posts?_embed=likes", {
        });
        console.log(data)
        setNewsList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadNewsData();
  }, []);

  return (
    <NewsContext.Provider value={{ loading, newsList ,selectNews,setSelectNews}}>
      {children}
    </NewsContext.Provider>
  );
}
