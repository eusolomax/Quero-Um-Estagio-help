import { Navigate } from "react-router-dom"

import { useAuth } from "./Auth"

export function RequireAuth({ children }) {
    const auth = useAuth()

    if(!auth.user) {
        return <Navigate to="/user/login" />
    }

    return children
}