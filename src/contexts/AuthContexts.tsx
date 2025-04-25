import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type AuthContextProps = {
    isLoading: boolean
    session: null | UserAPIResponse
    save: (data: UserAPIResponse) => void,
    remove: () => void
}

const LOCAL_STORAGE_KEY = "@refund"

export const AuthContexts = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<null | UserAPIResponse>(null)
    const [isLoading, setIsLoading] = useState(true)

    const save = (data: UserAPIResponse) => {
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)

        api.defaults.headers["Authorization"] = `Bearer ${data.token}`

        setSession(data)
    }

    const remove = () => {
        setSession(null)
        localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)
        localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)

        window.location.assign("/")
    }

    const loadUser = () => {
        const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
        const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

        if (user && token) {
            api.defaults.headers["Authorization"] = `Bearer ${token}`

            setSession({
                token,
                user: JSON.parse(user),
            })
        }

        setIsLoading(false)
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <AuthContexts.Provider value={{ session, save, isLoading, remove }}>
            {children}
        </AuthContexts.Provider>
    )
}