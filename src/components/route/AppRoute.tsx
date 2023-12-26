import { AppRouteProp } from "utils/interfaces/prop";

export default function AppRoute({ component: Component }: AppRouteProp) {
    return <Component />
}
