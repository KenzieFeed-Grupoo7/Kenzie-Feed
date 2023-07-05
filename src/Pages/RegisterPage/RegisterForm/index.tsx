<<<<<<< HEAD
import { SubmitHandler, useForm } from "react-hook-form"
import { registerFormSchema, TRegisterForm } from "../RegisterFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { Input } from "../../../Components/Input"
import { UserContext, UserProvider } from "../../../Providers/UserContexts/UserContexts"


export const RegisterForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<TRegisterForm>({
        resolver: zodResolver(registerFormSchema)
    })

    const { userRegister } = useContext(UserContext)

    const submit: SubmitHandler<TRegisterForm> = (formData) => {
        userRegister(formData)
    }
    
    return(
        
        <form onSubmit={handleSubmit(submit)}>
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
            <button type="submit">Cadastrar-se</button>
        </form>
        
    )
}
=======
import { SubmitHandler } from "react-hook-form";
import { registerFormSchema, TRegisterForm } from "../LoginFirnSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Input } from "../../../Components/Input";
import { Header } from "../../../Components/Header";
import { Footer } from "../../../Components/Footer";
import { StyledContainer } from "../../../Styles/container";
import { StyledButton, StyledLink } from "../../../Styles/buttons";
import { StyledDiv, StyledForm, StyledMain } from "../index.ts";
import {
  StyledParagraph,
  StyledTitleOne,
  StyledTitleTwo,
} from "../../../Styles/typography";
import { Link } from "react-router-dom";


export const RegisterForm = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Link to="/Login" className="LinkBtn"> Voltar</Link>
        <StyledDiv>
          <StyledTitleTwo>Cadastre um usuário</StyledTitleTwo>
          <StyledParagraph fontStyle="lg">
            Preencha os campos corretamente para fazer login
          </StyledParagraph>
        </StyledDiv>
        <StyledForm>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />

          <Input type="password" placeholder="Confirmar senha" />
          <div className="SubmitContainer">
          <StyledButton size="sm">Cadastrar-se</StyledButton>
          </div>
        </StyledForm>
      </StyledMain>
      <Footer />
    </>
  );
};
>>>>>>> 6f1a2db3ddab16306532a998abd96872882860e1
