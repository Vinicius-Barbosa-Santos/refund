import { AuthProvider } from "./contexts/AuthContexts"
import { Routes } from "./routes"

export const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}