import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .register__nav {
    padding-bottom: 2rem;
  }

  .register__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }

  form div {
    width: 100%;
    max-width: 400px;
  }

  form .submit__container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 900px) {
    form {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
    }

    form .submit__container {
      width: 100%;
      max-width: 400px;
    }
  }
`;
