import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  flex-wrap: wrap;
  padding-top: 2rem;

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

  @media (max-width: 600px) {
    .button__container {
      width: 100%;
      justify-content: end;
    }
  }
`;
