import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/Api";

interface IUserProviderProps {
  children: React.ReactNode;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserContext {
  loginSubmit: (formData: ILoginFormData) => Promise<void>;
  login: (formData: ILoginFormData) => Promise<void>;
  logout: () => void;
  user: IUser | null;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const login = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<ILoginResponse>("/login", formData);

      localStorage.setItem("@TOKEN:", data.accessToken);
      localStorage.setItem("@USER:", JSON.stringify(data.user));

      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(`console do erro ${error}`);
    }
  };

  const loginSubmit = (formData: ILoginFormData) => login(formData);

  const logout = () => {
    setUser(null);
    navigate("/");
    localStorage.remove("@TOKEN");
    localStorage.remove("@USER");
  };

  return (
    <UserContext.Provider value={{ login, loginSubmit, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};
