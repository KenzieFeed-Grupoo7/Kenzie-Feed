import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;

  .img__container {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      max-width: 153px;
      border-radius: 25px;
    }
  }

  .button__container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    border: none;
    background-color: none;
  }
`;
