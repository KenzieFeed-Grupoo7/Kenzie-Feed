import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IStyledButtonProps {
  size: "sm" | "md" | "lg";
}

export const StyledButton = styled.button<IStyledButtonProps>`
  font-family: var(--font-secondary);
  font-weight: 700;
  color: var(--color-white);

  border-radius: 0.25rem;
  border: none;
  background-color: var(--color-blue);

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          font-size: 0.875rem;

          height: 2.6875rem;
          padding: 0 1.5rem;
        `;
      case "md":
        return css`
          font-size: 0.875rem;

          height: 3.375rem;
          padding: 0 1.75rem;
        `;
      case "lg":
        return css`
          font-size: 1.125rem;

          height: 4rem;
          padding: 0 2rem;
        `;
    }
  }}
`;

export const StyledButtonOutline = styled.button`
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-white);

  border-radius: 0.25rem;
  border: 1px solid var(--color-blue);
  background-color: var(--color-blue);

  height: 2.6875rem;
  padding: 0 1.125rem;
`;

export const StyledLink = styled(Link)`
  font-family: var(--font-secondary);
  color: var(--color-blue);
  line-height: 1.6;
  font-weight: 400;
  font-size: 0.9375rem;
`;
