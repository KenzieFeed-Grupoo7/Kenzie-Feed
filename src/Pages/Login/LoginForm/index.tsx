import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../LoginFormSchema/index.ts";
import { Input } from "../../../Components/Input/index.tsx";
import { StyledForm } from "./index.ts";
import { StyledButton, StyledLink } from "../../../Styles/buttons.ts";
import { api } from "../../../Services/Api.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ILoginFormData {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  name: string;
  id: number;
}

interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const login = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<ILoginResponse>("/login", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN:", data.accessToken);
      localStorage.setItem("@USER:", JSON.stringify(user));
      navigate("/dashboard");
    } catch (error) {
      console.log(`console do erro ${error}`);
    }
  };

  const submit = async (formData: ILoginFormData) => {
    login(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h1>Acesse o KenzieFeed</h1>
      <p>Preencha os campos corretamente para fazer login</p>
      <Input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email}
      />
      <Input
        type="number"
        placeholder="Senha"
        {...register("password")}
        error={errors.password}
      />
      <StyledButton size="md" type="submit">
        Entrar
      </StyledButton>
      <p>Não é cadastrado</p>
      <StyledLink to="/register">Cadastre-se</StyledLink>
    </StyledForm>
  );
};
