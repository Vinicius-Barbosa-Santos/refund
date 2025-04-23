import { createContext, ReactNode } from "react";

export const AuthContexts = createContext({})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthContexts.Provider value={{ name: "Vinícius" }}>
            {children}
        </AuthContexts.Provider>
    )
}