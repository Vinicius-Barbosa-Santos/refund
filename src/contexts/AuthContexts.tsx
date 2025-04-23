import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
    session: null | UserAPIResponse
}

export const AuthContexts = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<null | UserAPIResponse>(null)

    return (
        <AuthContexts.Provider value={{ session }}>
            {children}
        </AuthContexts.Provider>
    )
}