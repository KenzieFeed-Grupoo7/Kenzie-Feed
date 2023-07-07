import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--color-gray);
  height: 75vh;
  overflow: auto;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
