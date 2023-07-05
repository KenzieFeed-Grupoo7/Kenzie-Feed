import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, TRegisterForm } from "../RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Input } from "../../../Components/Input";
import { UserContext } from "../../../Providers/UserContexts/UserContexts";
import { Link } from "react-router-dom";
import { StyledMain, StyledDiv, StyledForm } from "..";
import { Footer } from "../../../Components/Footer";
import { Header } from "../../../Components/Header";
import { StyledButton } from "../../../Styles/buttons";
import { StyledTitleTwo, StyledParagraph } from "../../../Styles/typography";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    userRegister(formData);
  };

  return (
    <>
      <Header />
      <StyledMain>
        <Link to="/Login" className="LinkBtn">
          {" "}
          Voltar
        </Link>
        <StyledDiv>
          <StyledTitleTwo>Cadastre um usuário</StyledTitleTwo>
          <StyledParagraph fontStyle="lg">
            Preencha os campos corretamente para fazer login
          </StyledParagraph>
        </StyledDiv>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            placeholder="Nome"
            {...register("name")}
            error={errors.name}
          />
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

          <Input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirm")}
            error={errors.confirm}
          />
          <div className="SubmitContainer">
            <StyledButton size="sm" type="submit">
              Cadastrar-se
            </StyledButton>
          </div>
        </StyledForm>
      </StyledMain>
      <Footer />
    </>
  );
};
