import { Route, Routes } from "react-router"

import { Refund } from "../pages/Refund"
import { NotFound } from "../pages/NotFound"

export const EmployeeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Refund />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}