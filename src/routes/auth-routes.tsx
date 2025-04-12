import { Route, Routes } from "react-router";
import { SignIn } from "../pages/SignIn";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    )
}