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
          <div className="login__figure">
            <img
              src={imgLogin}
              alt="Imagem mostrando um notebook, uma xícara vazia e uma agenda."
            />
          </div>
          <div className="login__form">
            <LoginForm />
          </div>
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
};
