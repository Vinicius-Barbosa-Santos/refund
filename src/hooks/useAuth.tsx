import { use } from "react"
import { AuthContexts } from "../contexts/AuthContexts"

export const useAuth = () => {
    const context = use(AuthContexts)

    return context
}