import { useForm } from "react-hook-form";
import { Input } from "../../../../Components/Input";
import { INews } from "../../../../Providers/NewsContexts/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateNewsSchema } from "../CreateNewsSchema";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts";

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
      <Input
        type="text"
        placeholder="Conteúdo do post"
        {...register("description")}
        error={errors.description}
      />
      <div>
        <button type="submit">Criar Post</button>
      </div>
    </form>
  );
};
