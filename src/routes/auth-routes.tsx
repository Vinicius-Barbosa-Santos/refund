import { Route, Routes } from "react-router";

import { AuthLayout } from "../components/AuthLayout";
import { SignIn } from "../pages/SignIn";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<SignIn />} />
            </Route>
        </Routes>
    )
}