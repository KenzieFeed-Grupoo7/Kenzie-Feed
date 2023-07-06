import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/Api";
import {
  ILoginFormData,
  ILoginResponse,
  IUser,
  IUserContext,
  IUserProviderProps,
} from "./@types";
import { TRegisterForm } from "../../Pages/RegisterPage/RegisterFormSchema";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<true | false>(false);
  const navigate = useNavigate();

  const login = async (formData: ILoginFormData) => {
    try {
      setLoading(true);
      const { data } = await api.post<ILoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: TRegisterForm) => {
    try {
      await api.post("/users", formData);
      toast.success("cadastro efetuado com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error("algo deu errado");
    }
  };

  const loginSubmit = (formData: ILoginFormData) => login(formData);

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ loading, login, loginSubmit, userLogout, user, userRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
