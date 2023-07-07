import { z } from "zod";

export const CreateNewsSchema = z.object({
  title: z.string().nonempty("o título é obrigatório"),
  image: z.string().nonempty("A imagem é obrigatória"),
  description: z.string().nonempty("O conteúdo é obrigatório"),
});
