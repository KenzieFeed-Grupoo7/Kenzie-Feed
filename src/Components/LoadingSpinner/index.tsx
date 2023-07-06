import { StyledLoadingSpinner, StyledSpinnerContainer } from "./style";
import logo from "../../Assets/logo.svg";

export const LoadingSpinner = () => {
  return (
    <StyledSpinnerContainer>
      <img src={logo} alt="Logo Kenzie Feed" />
      <StyledLoadingSpinner></StyledLoadingSpinner>
    </StyledSpinnerContainer>
  );
};
