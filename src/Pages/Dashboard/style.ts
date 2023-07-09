import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;

  .dashboard__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    .dashboard__header {
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }
    .header__button {
      width: 100%;
      padding-top: 1rem;
      display: flex;
      justify-content: end;
    }
  }
`;
