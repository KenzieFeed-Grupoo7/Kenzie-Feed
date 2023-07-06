import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/Api";
import {
  ILoginFormData,
  ILoginResponse,
  IUserContext,
  IUserProviderProps,
} from "./@types";
import { TRegisterForm } from "../../Pages/RegisterPage/RegisterFormSchema";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState<true | false>(false);
  const navigate = useNavigate();

  const login = async (formData: ILoginFormData) => {
    try {
      setLoading(true);
      const { data } = await api.post<ILoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      localStorage.setItem("@USERNAME", data.user.name);
      navigate("/dashboard");
    } catch (error) {
      toast.error("senha ou email incorreto");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: TRegisterForm) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("cadastro efetuado com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error("algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const loginSubmit = (formData: ILoginFormData) => login(formData);

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERNAME");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        login,
        loginSubmit,
        userLogout,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
