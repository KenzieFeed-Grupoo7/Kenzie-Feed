import logo from "../../Assets/logo.svg";
import logout from "../../Assets/logout.svg";
import { StyledButton } from "../../Styles/buttons";

import { StyledHeader, StyledUser } from "./style";

export const Header = () => {
  const token = localStorage.getItem("@TOKEN");

  // pegar inicial usuario
  return (
    <StyledHeader>
      <img src={logo} alt="Logo Kenzie Hub" />
      <div>
        {token ? <StyledUser></StyledUser> : null}
        {!token ? <StyledButton size="sm">Acessar</StyledButton> : null}
        {token ? <img src={logout} /> : null}
      </div>
    </StyledHeader>
  );
};
