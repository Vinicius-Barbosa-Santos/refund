import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false)

    const onAction = (formData: FormData) => {
        console.log({
            email: formData.get("email"),
            password: formData.get("password"),
        })
    }

    return (
        <form action={onAction} className="w-full flex flex-col gap-4">
            <Input
                name="email"
                required
                legend="E-mail"
                type="email"
                placeholder="seu@gmail.com"
            />

            <Input
                name="password"
                required
                legend="Senha"
                type="password"
                placeholder="123456"
            />

            <Button isLoading={isLoading} type="submit">
                Entrar
            </Button>

            <a href="/signup"
                className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center 
                hover:text-green-800 transition 
                ease-linear"
            >
                Criar Conta
            </a>
        </form>
    );
}