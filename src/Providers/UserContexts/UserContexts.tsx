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
import { toast } from 'react-toastify'

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

  const userRegister = async (formData: TRegisterForm) => {
    try {
      const { data } = await api.post("/users", formData)      
      toast.success('cadastro efetuado com sucesso')
      navigate("/login")
      
    } catch (error) {
      toast.error("algo deu errado")
      
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
    <UserContext.Provider value={{ login, loginSubmit, logout, user, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
