import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

export const Routes = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}