import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .internal__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .internal__new {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .internal__new img {
    width: 100%;
    max-width: 900px;
  }

  .new__like {
    display: flex;
    width: 100%;
    justify-content: start;
  }

  .new__like img {
    width: 22px;
    height: 22px;
    margin-right: 0.25rem;
  }

  .new__description {
    padding-bottom: 2rem;
  }

  .internal__more {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 1rem;
  }

  .internal__more ul {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 2rem;
  }
`;
