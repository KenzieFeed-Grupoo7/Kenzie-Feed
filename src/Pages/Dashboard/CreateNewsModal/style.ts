import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(85, 163, 255, 0.5);
  z-index: 9999;

  .modal__content {
    background-color: var(--color-white);

    position: fixed;

    padding: 20px;

    width: 600px;
    max-width: 90%;
    height: 550px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content__header {
    position: relative;
    top: 0;
    margin-bottom: 20px;

    button {
      position: absolute;
      top: -10px;
      right: 0;
    }
  }

  textarea {
    background-color: var(--color-white);
    width: 100%;

    font-family: var(--font-secondary);
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.0625rem;
    font-weight: 400;

    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.5);

    padding: 1.25rem;
  }

  p {
    color: red;
    font-size: clamp(0.5rem, 7vw, 0.75rem);
    margin-bottom: 0.5rem;
    height: 0.75rem;
  }

  .button__container {
    display: flex;
    justify-content: flex-end;
  }
`;
