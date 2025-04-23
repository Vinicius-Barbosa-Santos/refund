import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
    session: null | UserAPIResponse
    save: (data: UserAPIResponse) => void
}

export const AuthContexts = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<null | UserAPIResponse>(null)

    const save = (data: UserAPIResponse) => {
        setSession(data)
    }

    return (
        <AuthContexts.Provider value={{ session, save }}>
            {children}
        </AuthContexts.Provider>
    )
}