import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProp } from "utils/interfaces/prop";

export default function ProtectedRoute({ signedIn }: ProtectedRouteProp) {
    return !signedIn ? <Navigate to={'/login'} replace /> : <Outlet />
}
