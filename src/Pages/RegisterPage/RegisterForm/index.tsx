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
