import { z } from "zod";

export const registerFormSchema = z.object({
    name: 
        z.string()
        .nonempty('O nome é obrigatório')
        .min(3, 'o nome deve conter no minimo 3 caracteres'),
    email: 
        z.string()
        .nonempty('o email é obrigatório')
        .email('Forneça um email válido'),
    password: 
        z.string()
        .nonempty('A senha é obrigatória')
        .min(8, 'A senha deve conter no minimo 8 caracteres'),
    confirm: 
        z.string()
        .nonempty('Confirmae senha é obrigatorio')
}).refine(({password, confirm}) => password === confirm, {
    message: 'As senhas devem ser iguais',
    path: ['confirm']
})

export type TRegisterForm = z.infer<typeof registerFormSchema>