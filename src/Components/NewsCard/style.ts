import styled from "styled-components";

export const StyledLi = styled.li`
  min-width: 320px;
  width: 100%;
  max-width: 500px;
  gap: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  button {
    color: var(--color-blue);
  }
  button:hover {
    border-bottom: 1px solid var(--color-blue);
  }
  img {
    border-radius: 25px;
    height: 250px;
    width: 550px;
    max-width: 100%;
  }
`;
