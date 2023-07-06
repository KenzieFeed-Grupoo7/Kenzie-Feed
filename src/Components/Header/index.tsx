import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import logout from "../../Assets/logout.svg";
import { StyledLink, StyledLinkOutline } from "../../Styles/buttons";
import { StyledContainer } from "../../Styles/container";
import { StyledHeader, StyledUser } from "./style";
import { UserContext } from "../../Providers/UserContexts/UserContexts";
import { useContext } from "react";

export const Header = () => {
  const user = localStorage.getItem("@USERNAME");
  const { userLogout } = useContext(UserContext);

  return (
    <StyledContainer>
      <StyledHeader>
        <img src={logo} alt="Logo Kenzie Hub"/>
        <div>
          {user ? <StyledUser>{user.charAt(0).toUpperCase()}</StyledUser> : null}

          {!user ? <StyledLink to="/login">Acessar</StyledLink> : null}

          {user ? (
            <StyledLinkOutline to="/dashboard">Dashboard</StyledLinkOutline>
          ) : null}

          {user ? (
            <Link onClick={userLogout} to={"/"}>
              <img src={logout} alt="imagem logout" />
            </Link>
          ) : null}
        </div>
      </StyledHeader>
    </StyledContainer>
  );
};
