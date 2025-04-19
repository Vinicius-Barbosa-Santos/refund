import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export const Routes = () => {
    return (
        <BrowserRouter>
            {/* <AuthRoutes /> */}
            <ManagerRoutes />
        </BrowserRouter>
    )
}