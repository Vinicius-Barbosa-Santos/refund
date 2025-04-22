import { useActionState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const SignIn = () => {
    const signIn = async (prevState: any, formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log({
            state
        })

        return { email, password };
    }

    const [state, formAction, isLoading] = useActionState(signIn, {
        email: "",
        password: ""
    })

    return (
        <form action={formAction} className="w-full flex flex-col gap-4">
            <Input
                name="email"
                required
                legend="E-mail"
                type="email"
                placeholder="seu@gmail.com"
                defaultValue={String(state?.email)}
            />

            <Input
                name="password"
                required
                legend="Senha"
                type="password"
                placeholder="123456"
                defaultValue={String(state?.password)}
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