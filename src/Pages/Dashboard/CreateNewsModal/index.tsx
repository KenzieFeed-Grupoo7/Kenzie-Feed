import { useContext } from "react";
import { CreateNewsForm } from "./CreateNewsForm/index.tsx";
import { NewsContext } from "../../../Providers/NewsContexts/NewsContexts.js";

export const CreateNewsModal = () => {
  const { closeModal } = useContext(NewsContext);

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="content__header">
          <h2>Novo Post</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <CreateNewsForm />
      </div>
    </div>
  );
};
