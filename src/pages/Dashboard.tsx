import searchSvg from "../assets/search.svg";

import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem, RefundItemProps } from "../components/RefundItem";

import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { Pagination } from "../components/Pagination";

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
    const [totalOfPages, setTotalOfPages] = useState(10)
    const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE])

    const fetchRefunds = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(name)
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