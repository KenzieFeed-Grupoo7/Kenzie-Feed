import { useContext } from "react";
import { CreateNewsForm } from "./CreateNewsForm/index.tsx";
import { NewsContext } from "../../../Providers/NewsContexts/NewsContexts.js";
import { StyledModalContainer } from "./index.ts";
import close from "../../../Assets/close.svg"
import { StyledTitleTwo } from "../../../Styles/typography.ts";

export const CreateNewsModal = () => {
  const { closeModal } = useContext(NewsContext);

  return (
    <StyledModalContainer>
      <div className="modal__content">
        <div className="content__header">
          <StyledTitleTwo>Novo post</StyledTitleTwo>
          <button onClick={closeModal}>
            <img src={close} alt="botao fechar" />
          </button>
        </div>
        <CreateNewsForm />
      </div>
    </StyledModalContainer>
  );
};
