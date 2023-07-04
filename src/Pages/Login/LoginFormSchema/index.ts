import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("o email é obrigatório")
    .email("Forneça um email válido"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(6, "A senha deve conter no minimo 8 caracteres"),
});
