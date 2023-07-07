import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  height: 75vh;
  overflow: auto;

  li {
    max-width: 530px;
    min-width: 300px;
  }
`;
