import { useContext } from "react";
import { Input } from "../../../Components/Input/index.tsx";
import { NewsContext } from "../../../Providers/NewsContexts/NewsContexts.tsx";

export const UserUpdateModal = () => {
  const { closeModal } = useContext(NewsContext);

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="content__header">
          <h2>Novo Post</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <form className="content__form">
          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Imagem em destaque" />
          <Input type="text" placeholder="Conteúdo do post" />
          <div>
            <button>Criar Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};
