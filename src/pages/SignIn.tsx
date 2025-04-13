import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const SignIn = () => {
    return (
        <form className="w-full flex flex-col gap-4">
            <Input
                required
                legend="E-mail"
                type="email"
                placeholder="seu@gmail.com"
            />

            <Input
                required
                legend="Senha"
                type="password"
                placeholder="123456"
            />

            <Button isLoading>
                Entrar
            </Button>
        </form>
    );
}