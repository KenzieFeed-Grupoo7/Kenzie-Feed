import { StyledContainer } from "../../Styles/container";
import { StyledParagraph } from "../../Styles/typography";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledContainer>
      <StyledFooter>
        <div>
          <StyledParagraph fontStyle="lg">
            Todos os direitos reservados - Kenzie Academy Brasil
          </StyledParagraph>
        </div>
      </StyledFooter>
    </StyledContainer>
  );
};
