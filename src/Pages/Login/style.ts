import { styled } from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login__container {
    display: flex;
    flex-direction: row;

    gap: 10%;
  }

  img {
    width: 50%;
    max-width: 600px;
  }

  .login__content {
    width: 50%;
    height: 600px;
  }

  .login__content form {
    width: 100%;
    max-width: 400px;
    height: 100%;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    .login__container {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }

    img {
      width: 100%;
      max-width: 400px;
    }

    .login__content {
      width: 100%;
      height: fit-content;

      display: flex;
      justify-content: center;
    }
  }
`;
