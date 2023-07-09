import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  overflow: auto;

  .news__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .news__header {
      gap: 1rem;
    }

    .news__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .news__header img {
      width: 100%;
      max-width: 1200px;
      height: 385px;
      padding-top: 1rem;
      border-radius: 3rem;
      object-fit: cover;
    }

    .news__last {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      padding-top: 4rem;
    }

    .news__last-button {
      display: flex;
      align-items: center;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      gap: 1rem;
      padding-top: 2rem;
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

  @media (max-width: 500px) {
    .news__container .news__last {
      flex-direction: column;
    }
    .news__container .news__last .news__last-button {
      width: 100%;
      justify-content: end;
      padding-bottom: 2rem;
    }
  }
`;
