import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
    transform: rotate(360deg)
    }
`;
export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 5rem;
  height: 100vh;
`;

export const StyledLoadingSpinner = styled.div`
  width: 50px;
  height: 50px;

  border: 10px solid black;
  border-top: 10px solid gray;
  border-radius: 50%;

  animation: ${spinnerAnimation} 1.5s linear infinite;
`;
