import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./auth-routes";

export const Routes = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}