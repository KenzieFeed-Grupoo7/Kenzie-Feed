import { z } from "zod";

export const editFormSchema = z.object({
  title: z
    .string()
    .nonempty("O título é obrigatório")
    .min(3, "o nome deve conter no minimo 3 caracteres"),
  image: z.string().nonempty("A Imagem é obrigatório"),
  description: z
    .string()
    .nonempty("A descrição é obrigatória")
    .min(10, "A descrição deve conter no minimo 10 caracteres"),
});

export type TEditForm = z.infer<typeof editFormSchema>;
