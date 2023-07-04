import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../LoginFormSchema/index.ts";
import { Input } from "../../../Components/Input/index.tsx";
import { StyledForm } from "./index.ts";
import { StyledButton } from "../../../Styles/buttons.ts";

interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const submit = async (data: ILoginFormData) => {
    console.log(data);
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
      <a>Cadastre-se</a>
    </StyledForm>
  );
};
