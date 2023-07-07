import styled from "styled-components";

export const StyledDiv = styled.div`
  .newsContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    div {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .linkBtn {
      font-family: var(--font-secondary);
      font-weight: 700;
      color: var(--color-white);

      border-radius: 0.25rem;
      border: none;
      background-color: var(--color-blue);
      font-size: 0.875rem;

      height: 2.6875rem;
      padding: 0.75rem 1.5rem;

      text-decoration: none;
    }
  }
`;
