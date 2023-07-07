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

  display: flex;
  align-items: center;
  gap: 0.4rem;

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

export const StyledLink = styled(Link)`
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-white);

  border-radius: 0.25rem;
  border: 1px solid var(--color-blue);
  background-color: var(--color-blue);

  padding: 0.7rem 1.75rem;
`;

export const StyledLinkOutline = styled(Link)`
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-blue);

  border-radius: 0.25rem;
  border: 1px solid var(--color-blue);
  background-color: var(--color-white);

  padding: 0.7rem 1.75rem;
`;
