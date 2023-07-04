import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"

export const PublicRoutes = () => {
    //verificar se o usuario esta logado (const { user } = useContext(UserContext))
    const [user, setUser] = useState(false) //coloquei so pra ele nao ficar reclamando

    return !user ? <Outlet/> : <Navigate to="/dashboard"/>
}

