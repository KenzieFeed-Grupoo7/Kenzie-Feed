import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { StyledParagraph, StyledTitleTwo } from "../../Styles/typography";
import { RegisterForm } from "./RegisterForm";
import { StyledMain } from "./style";
import { StyledContainer } from "../../Styles/container";
import { StyledLink } from "../../Styles/buttons";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer className="register__container">
          <div className="register__nav">
            <StyledLink to="/Login" className="LinkBtn">
              {" "}
              Voltar
            </StyledLink>
          </div>
          <div className="register__header">
            <StyledTitleTwo>Cadastre um usuário</StyledTitleTwo>
            <StyledParagraph fontStyle="lg">
              Preencha os campos corretamente para fazer login
            </StyledParagraph>
          </div>
          <RegisterForm />
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
};
