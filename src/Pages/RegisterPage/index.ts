import { styled } from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 1rem;
  max-width:850px;
  Input {
    width: 400px;
  }
  button {
    margin-top: 0.5rem;
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledMain = styled.main`
  .LinkBtn {
    font-family: var(--font-secondary);
    font-weight: 700;
    color: var(--color-blue);

    border-radius: 0.25rem;
    border:1px solid var(--color-blue);
    background-color: var(--color-white);
    font-size: 0.875rem;

    height: 2.6875rem;
    padding: 0.75rem 1.5rem;
    margin-left:7vw;              

    text-decoration: none;
  }
  .SubmitContainer{
    display:flex;
    justify-content:end;
    width:100%;
  }
`;
