import { Route, Routes } from "react-router";

import { AuthLayout } from "../components/AuthLayout";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Route>
        </Routes>
    )
}