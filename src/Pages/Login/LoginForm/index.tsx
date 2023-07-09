import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../LoginFormSchema/index.ts";
import { Input } from "../../../Components/Input/index.tsx";
import { StyledButton, StyledLink } from "../../../Styles/buttons.ts";
import { UserContext } from "../../../Providers/UserContexts/UserContexts.tsx";
import { useContext } from "react";
import { ILoginFormData } from "../../../Providers/UserContexts/@types.ts";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const { loginSubmit, loading } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <h1>Acesse o KenzieFeed</h1>
      <p>Preencha os campos corretamente para fazer login</p>
      <Input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
        error={errors.password}
      />
      <StyledButton size="md" type="submit">
        Entrar
      </StyledButton>
      <p>Não é cadastrado</p>
      <StyledLink to="/register">Cadastre-se</StyledLink>
      {loading ? <p>Carregando...</p> : null}
    </form>
  );
};
