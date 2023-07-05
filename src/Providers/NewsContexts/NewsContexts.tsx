import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/Api";
import { INewsContext, INewsProviderProps, INews } from "./@types";
import { UserContext } from "../UserContexts/UserContexts";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: INewsProviderProps) => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [userNewsList, setUserNewsList] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectNews, setSelectNews] = useState<INews>();

  console.log(newsList);

  const { user } = useContext(UserContext);

  const getUserPosts = () => {
    const userPosts = newsList.filter((news) => news.id === user?.id);
    setUserNewsList(userPosts);
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  useEffect(() => {
    const loadNewsData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get<INews[]>("/posts?_embed=likes", {});
        setNewsList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadNewsData();
  }, []);

  const getNewById = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await api.get<INews>(`/posts/${id}?_embed=likes`);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (formData: INews) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (formData: INews, newId: number) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post(`/posts/${newId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (newId: number) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.delete(`/posts/${newId}}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const like = async (formData: INews) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/likes", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deslike = async (newId: number) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.delete(`/likes/${newId}}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        loading,
        newsList,
        selectNews,
        setSelectNews,
        getNewById,
        addPost,
        updatePost,
        deletePost,
        like,
        deslike,
        userNewsList,
        setUserNewsList,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};