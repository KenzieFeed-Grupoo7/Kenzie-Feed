import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/Api";
import { INewsContext, INewsProviderProps, INews, INew } from "./@types";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: INewsProviderProps) => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectNews, setSelectNews] = useState<INews>();

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

  const getPostById = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await api.get<INew>(`/posts/${id}?_embed=likes`);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (formData: any) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (formData: any, newId: any) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (newId: any) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.delete(`/posts/${newId}}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const like = async (formData: any) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/likes", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const unlike = async (newId: any) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.delete(`/likes/${newId}}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider value={{ loading, newsList, selectNews, setSelectNews }}>
      {children}
    </NewsContext.Provider>
  );
};
