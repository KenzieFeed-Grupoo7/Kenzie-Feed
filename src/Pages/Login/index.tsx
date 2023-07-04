import imgLogin from "../../Assets/imgLogin.svg";
import { StyledContainer } from "../../Styles/container.ts";
import { LoginForm } from "./LoginForm/index.tsx";
import { StyledMain } from "./index.ts";

export const LoginPage = () => {
  return (
    <>
      <header>
        <h1>isso è o HEADER</h1>
      </header>
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
    </>
  );
};
