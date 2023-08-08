import { BrowserRouter as Router } from "react-router-dom"
import { LoadingProvider } from './LoadingContext';
import { AppRoutes } from "./app.routes"

export const Routes = () => {
  return (
    <Router>
      <LoadingProvider>
        <AppRoutes />
      </LoadingProvider>
    </Router>
  )
}