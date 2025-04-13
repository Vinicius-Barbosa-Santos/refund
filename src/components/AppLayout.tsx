import { Outlet } from "react-router"

export const AppLayout = () => {
    return (
        <div
            className="w-screen h-screen bg-gray-400 flex flex-col 
            items-center 
          text-gray-100"
        >
            <main className="p-3 w-full md:w-auto">
                <Outlet />
            </main>
        </div>
    )
}