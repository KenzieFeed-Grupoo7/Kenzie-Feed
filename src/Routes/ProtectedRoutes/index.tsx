import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoutes = () => {
    //vericar se o usuario esta logado no UserContext
    const [user, setUser] = useState(null) //coloquei so pra ele nao ficar reclamando

    return user ? <Outlet/> : <Navigate to="/"/>
}

