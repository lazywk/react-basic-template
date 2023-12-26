import { Navigate } from "react-router-dom";
import { AuthorityGuardProp } from "utils/interfaces/prop";


export default function AuthorityGuard({ userAuthority, authority, children }: AuthorityGuardProp) {
    return authority.includes(userAuthority) ? children : <Navigate to="/access-denied" replace />
}
