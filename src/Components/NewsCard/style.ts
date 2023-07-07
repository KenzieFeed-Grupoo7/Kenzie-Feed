import styled from "styled-components";

export const StyledLi = styled.li`
  width: 500px;
  min-width:400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
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
  }
`;
