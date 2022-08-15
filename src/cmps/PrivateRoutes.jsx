import { Outlet, Navigate } from "react-router-dom";
import { useSessionStore } from "../store";

const PrivateRoutes = () => {
    const sessionStore = useSessionStore();

    return (
        sessionStore.isLogged ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes;