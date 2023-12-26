import { Navigate, Outlet } from "react-router-dom";
import { PublicRouteProp } from "utils/interfaces/prop";

export default function PublicRoute({ signedIn }: PublicRouteProp) {
    return signedIn ? <Navigate to={'/'} replace /> : <Outlet />
}
