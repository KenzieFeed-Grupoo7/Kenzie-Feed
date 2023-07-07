import { StyledMain } from ".";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { StyledLinkOutline } from "../../Styles/buttons";
import { StyledTitleTwo } from "../../Styles/typography";
import { EditForm } from "./EditForm";

export const EditPage = () => {

  return (
    <>
      <Header />
        <StyledMain>
          <div>
            <StyledTitleTwo>Editando:</StyledTitleTwo>
            <StyledLinkOutline to="/dashboard">Voltar</StyledLinkOutline>
          </div>
          <EditForm />
        </StyledMain>
      <Footer />
    </>
  );
};
