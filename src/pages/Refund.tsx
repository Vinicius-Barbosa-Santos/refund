import { useState } from "react"
import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"

export const Refund = () => {

    const [category, setCategory] = useState("")

    return (
        <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w[512px]">
            <header>
                <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar o reembolso. </p>
            </header>

            <Input
                required
                legend="Nome da solicitação"
            />

            <Select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                legend="Categoria"
            >
                {
                    CATEGORIES_KEYS.map((category) => (
                        <option value={category} key={category}>{CATEGORIES[category].name}</option>
                    ))
                }
            </Select>
        </form>
    )
}