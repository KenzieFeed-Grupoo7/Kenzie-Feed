import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/Api";
import { INewsContext, INewsProviderProps, INews, INew } from "./@types";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: INewsProviderProps) => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadNewsData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/posts?_embed=likes", {});
        setNewsList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadNewsData();
  }, []);

  const getNew = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await api.get(`/posts/${id}?_embed=likes`);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  /*
  {
    "title": "4 lugares para viajar nas próximas férias de verão",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "owner": "Roberto Silva",
    "userId": 1,
    "image": "https://res.cloudinary.com/dsbkp5841/image/upload/v1688391686/Rectangle_4_lvbqtd.jpg"
  }
    id 
    likes: []
  */
  const addPost = async (formData: any) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewsList((newsList) => [...newsList, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <NewsContext.Provider value={{ loading, newsList, getNew, addPost }}>
      {children}
    </NewsContext.Provider>
  );
};
