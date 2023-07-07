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
        .nonempty("Cadastre uma senha")
        .min(8, "A senha precisa conter pelo menos 8 caracteres")
        .regex(/(?=.?[A-Z])/, "É necessario pelo menos uma letra maiúscula")
        .regex(/(?=.?[a-z])/, "É necessário pelo menos uma caracter minúsculo")
        .regex(/(?=.?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.?[#?!@$%^&*-])/, "É necessário ao menos um caractere especial"),
    confirm: 
        z.string()
        .nonempty('Confirmar senha é obrigatorio')
}).refine(({password, confirm}) => password === confirm, {
    message: 'As senhas devem ser iguais',
    path: ['confirm']
})

export type TRegisterForm = z.infer<typeof registerFormSchema>;
