import { StyledContainer } from "../../Styles/container";
import { StyledParagraph } from "../../Styles/typography";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledContainer>
      <StyledFooter>
        <StyledParagraph fontStyle="lg">
          Todos os direitos reservados - Kenzie Academy Brasil
        </StyledParagraph>
      </StyledFooter>
    </StyledContainer>
  );
};
