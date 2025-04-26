import searchSvg from "../assets/search.svg";

import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem, RefundItemProps } from "../components/RefundItem";

import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { Pagination } from "../components/Pagination";
import { api } from "../services/api";
import { AxiosError } from "axios";

const REFUND_EXAMPLE = {
    id: "123",
    name: "Vinícius",
    category: "Transporte",
    amount: formatCurrency(34.5),
    categoryImg: CATEGORIES["transport"].icon
}

export const Dashboard = () => {
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const [totalOfPages, setTotalOfPages] = useState(0)
    const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE])

    const PER_PAGE = 5

    const fetchRefunds = async () => {
        try {
            const response = await api.get(`/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`)

            console.log(response.data)
        } catch (error) {
            console.log(error)

            if (error instanceof AxiosError) {
                return alert(error.response?.data.message)
            }

            alert("Não foi possível carregar!")
        }
    }

    const handlePagination = (action: "next" | "previous") => {
        setPage((prevPage) => {
            if (action === "next" && prevPage < totalOfPages) {
                return prevPage + 1
            }

            if (action === "previous" && prevPage > 1) {
                return prevPage - 1
            }
            return prevPage
        })
    }

    useEffect(() => {
        fetchRefunds()
    }, [])

    return (
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

            <form onSubmit={fetchRefunds} className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
                <Input onChange={(e) => setName(e.target.value)} placeholder="Pesquisar pelo nome" />

                <Button type="submit" variant="icon">
                    <img className="w-5" src={searchSvg} alt="" />
                </Button>
            </form>

            <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                {
                    refunds.map((item) => (
                        <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
                    ))
                }
            </div>

            <Pagination
                current={page}
                total={totalOfPages}
                onNext={() => handlePagination("next")}
                onPrevious={() => handlePagination("previous")}
            />
        </div>
    );
}