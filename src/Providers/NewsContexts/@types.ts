import { Dispatch, SetStateAction } from "react";

export interface INewsProviderProps {
  children: React.ReactNode;
}

export interface INews {
  title: string;
  description: string;
  owner: string;
  userId: number;
  id: number;
  image: string;
  likes: any[];
}

export interface INew {
    title: string;
    description: string;
    owner: string;
    userId: number;
    id: number;
    likes: any[];
}

export interface INewsContext {
  loading: boolean
  newsList: INews[]
  selectNews: undefined|INews
  setSelectNews: Dispatch<SetStateAction<undefined | INews>>
}
