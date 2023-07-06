import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { NewsContext } from "../../../Providers/NewsContexts/NewsContexts";
import { StyledButton } from "../../../Styles/buttons";
import { Input } from "../../../Components/Input";
import { TEditForm, editFormSchema } from "../EditFormSchema";
import { StyledLabel } from "../../../Components/Input/style";

export const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditForm>({
    resolver: zodResolver(editFormSchema),
  });

  const { updatePost } = useContext(NewsContext);

  const submit: SubmitHandler<TEditForm> = (formData) => {
    updatePost(formData, 2);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Título"
        type="text"
        placeholder="Título"
        {...register("title")}
        error={errors.title}
      />
      <Input
        label="Imagem em destaque"
        type="text"
        placeholder="Imagem em destaque"
        {...register("image")}
        error={errors.image}
      />

      <div className="textarea__container">
        <StyledLabel htmlFor="description">Conteúdo</StyledLabel>
        <textarea
          placeholder="Conteúdo do post"
          id="description"
          rows={12}
          {...register("description")}
        />
      </div>

      <div>
        <StyledButton size="sm" type="submit">
          Salvar póst
        </StyledButton>
      </div>
    </form>
  );
};
