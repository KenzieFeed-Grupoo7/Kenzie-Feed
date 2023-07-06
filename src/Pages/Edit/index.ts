import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--color-gray);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    max-width: 920px;
    margin: 0 auto;
    padding: 1rem;

    input {
      border: none;
      background-color: var(--color-white);
      width: 100%;

    }
    textarea {
      background-color: var(--color-white);
      width: 100%;

      font-family: var(--font-secondary);
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.0625rem;
      font-weight: 400;

      border-radius: 0.25rem;

      padding: 1.25rem;
    }

    p {
        color: red;
        font-size: clamp(0.50rem, 7vw, 0.75rem);
        margin-bottom: 0.5rem;
        height: 0.75rem;
    }
  }
`;
