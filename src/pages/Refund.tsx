import { useState } from "react"
import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"
import { useNavigate, useParams } from "react-router"

import fileSvg from '../assets/file.svg'

import * as z from "zod"

const refundSchema = z.object({
    name: z.string().min(3, { message: "Informe um nome claro para a sua solicitação" }),
    category: z.string().min(1, { message: "Informe a categoria" }),
    amount: z.coerce.number({ message: "Informe um valor válido" }).positive({ message: "Informe um valor válido e superior a zero" })
})

export const Refund = () => {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [filename, setFilename] = useState<File | null>(null)

    const navigate = useNavigate()
    const params = useParams<{ id: string }>()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (params.id) {
            return navigate(-1)
        }

        try {
            setIsLoading(true)

            const data = refundSchema.parse({
                name,
                category,
                amount: amount.replace(",", "."),
            })

            navigate("/confirm", { state: { fromSubmit: true } })
        } catch (error) {
            console.log(error)

            if (error instanceof z.ZodError) {
                return alert(error.issues[0].message)
            }

            alert("Não foi poss´vel realizar a solicitação")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w[512px]">
            <header>
                <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar o reembolso. </p>
            </header>

            <Input
                required
                legend="Nome da solicitação"
                value={name}
                disabled={!!params.id}
                onChange={(e) => setName(e.target.value)}
            />

            <div className="flex gap-4">
                <Select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    legend="Categoria"
                    disabled={!!params.id}
                >
                    {
                        CATEGORIES_KEYS.map((category) => (
                            <option value={category} key={category}>{CATEGORIES[category].name}</option>
                        ))
                    }
                </Select>

                <Input
                    required
                    legend="Valor"
                    value={amount}
                    disabled={!!params.id}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            {params.id ? (
                <a href="https://www.rocketseat.com.br/" target="_blank" className="text-sm text-green-100 
                    font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear">
                    <img src={fileSvg} alt="Ícone do arquivo" />
                    Abrir comprovante!
                </a>
            ) : <Upload
                disabled={!!params.id}
                filename={filename && filename.name}
                onChange={(e) => e.target.files && setFilename(e.target.files[0])}
            />
            }

            <Button isLoading={isLoading} type="submit">
                {params.id ? "Voltar" : "Enviar"}
            </Button>
        </form>
    )
}