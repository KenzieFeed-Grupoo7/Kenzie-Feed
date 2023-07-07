import { useContext } from "react";
import { CreateNewsForm } from "./CreateNewsForm/index.tsx";
import { NewsContext } from "../../../Providers/NewsContexts/NewsContexts.js";
import { StyledModalContainer } from "./style.ts";
import close from "../../../Assets/close.svg";

export const CreateNewsModal = () => {
  const { closeModal } = useContext(NewsContext);

  return (
    <StyledModalContainer>
      <div className="modal__content">
        <div className="content__header">
          <h2>Novo Post</h2>
          <button onClick={closeModal}>
            <img src={close} alt="botao fechar" />
          </button>
        </div>
        <CreateNewsForm />
      </div>
    </StyledModalContainer>
  );
};
