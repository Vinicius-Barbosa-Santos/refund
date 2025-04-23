import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
    session: null | UserAPIResponse
    save: (data: UserAPIResponse) => void
}

const LOCAL_STORAGE_KEY = "@refund"

export const AuthContexts = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<null | UserAPIResponse>(null)

    const save = (data: UserAPIResponse) => {
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)
        setSession(data)
    }

    return (
        <AuthContexts.Provider value={{ session, save }}>
            {children}
        </AuthContexts.Provider>
    )
}