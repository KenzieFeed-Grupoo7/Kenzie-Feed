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

    width: 800px;
    max-width: 90%;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content__header {
    position: relative;
    top: 0;

    button {
    }
  }
`;
