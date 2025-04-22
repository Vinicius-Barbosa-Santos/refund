import { useActionState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import * as z from "zod";

const signInScheme = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().trim().min(6, "A senha deve ter no mínimo 6 caracteres!")
})

export const SignIn = () => {
    const signIn = async (_: any, formData: FormData) => {
        try {
            const data = signInScheme.parse({
                email: formData.get("email"),
                password: formData.get("password")
            })

            console.log(data)
        } catch (error) {
            console.log(error)

            if (error instanceof z.ZodError) {
                return { message: error.issues[0].message }
            }

            return { message: "Não foi possível entrar!" }
        }
    }

    const [state, formAction, isLoading] = useActionState(signIn, null)

    return (
        <form action={formAction} className="w-full flex flex-col gap-4">
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

            <p className="text-sm text-red-600 text-center my-4 font-medium">
                {state?.message}
            </p>

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