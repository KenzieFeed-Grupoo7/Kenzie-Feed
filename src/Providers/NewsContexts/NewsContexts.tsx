import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/Api";
import {
  INewsContext,
  INewsProviderProps,
  INews,
  ILike,
  IUpdateForm,
} from "./@types";
import { toast } from "react-toastify";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: INewsProviderProps) => {
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [userNewsList, setUserNewsList] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectNews, setSelectNews] = useState<INews>();
  const [isOpen, setIsOpen] = useState(false);

  const userId = Number(localStorage.getItem("@USERID"));

  useEffect(() => {
    const loadNewsData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get<INews[]>("/posts?_embed=likes", {});
        setNewsList(data);
        const userPosts = data.filter((news) => news.userId === userId);
        setUserNewsList(userPosts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadNewsData();
  }, [userId]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const getNewById = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await api.get<INews>(`/posts/${id}?_embed=likes`);
      setSelectNews(data);
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
      await api.post("/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Post criado com sucesso!");
      setUserNewsList([...userNewsList, formData]);
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (formData: IUpdateForm, newId: string) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post(`/posts/${newId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(formData);
      console.log(newId);
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
      const { data } = await api.delete(`/posts/${newId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      const postList = userNewsList.filter((news) => news.id !== newId);
      setUserNewsList(postList);
      toast.info("Post deletado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const like = async (formData: ILike) => {
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
      const { data } = await api.delete(`/likes/${newId}`, {
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
        isOpen,
        setIsOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
