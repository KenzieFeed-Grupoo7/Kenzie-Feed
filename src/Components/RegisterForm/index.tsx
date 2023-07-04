import { SubmitHandler } from "react-hook-form"
import { registerFormSchema, TRegisterForm } from "./registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { Input } from "../Input"

export const RegisterForm = () => {
    
    
    return(
        
        <form>
            <Input
                type="text"
                placeholder="Nome"
            />
            <Input
                type="email"
                placeholder="E-mail"
            />
            <Input
                type="password"
                placeholder="Senha"
            />
        
            <Input
                type="password"
                placeholder="Confirmar senha"
            />
            <button>Cadastrar-se</button>
        </form>
        
    )
}