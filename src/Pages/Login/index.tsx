import imgLogin from "../../Assets/imgLogin.svg";
import { Footer } from "../../Components/Footer/index.tsx";
import { Header } from "../../Components/Header/index.tsx";
import { StyledContainer } from "../../Styles/container.ts";
import { LoginForm } from "./LoginForm/index.tsx";
import { StyledMain } from "./style.ts";

export const LoginPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer className="login__container">
          <img
            src={imgLogin}
            alt="Imagem mostrando um notebook, uma xícara vazia e uma agenda."
          />
          <div className="login__content">
            <LoginForm />
          </div>
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
};
