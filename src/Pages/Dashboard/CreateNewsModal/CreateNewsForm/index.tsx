import { useForm } from "react-hook-form";
import { Input } from "../../../../Components/Input";
import { INews } from "../../../../Providers/NewsContexts/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateNewsSchema } from "../CreateNewsSchema";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts";
import { StyledButton } from "../../../../Styles/buttons";

export const CreateNewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INews>({
    resolver: zodResolver(CreateNewsSchema),
  });

  const { addPost } = useContext(NewsContext);
  const userName = String(localStorage.getItem("@USERNAME"));
  const userId = Number(localStorage.getItem("@USERID"));

  const submit = (formData: INews) => {
    const newData = {
      ...formData,
      owner: userName,
      userId: userId,
    };
    addPost(newData);
    console.log(newData);
  };

  return (
    <form className="content__form" onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Título"
        {...register("title")}
        error={errors.title}
      />
      <Input
        type="text"
        placeholder="Imagem em destaque"
        {...register("image")}
        error={errors.image}
      />

      <div className="textarea__container">
        <textarea
          placeholder="Conteúdo do post"
          id="description"
          rows={5}
          {...register("description")}
        />
        <p>{errors.description?.message}</p>
      </div>

      {/* <Input
        type="text"
        placeholder="Conteúdo do post"
        {...register("description")}
        error={errors.description}
      /> */}

      <div className="button__container">
        <StyledButton size="lg" type="submit">
          Criar Post
        </StyledButton>
      </div>
    </form>
  );
};
