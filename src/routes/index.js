import { AuthenticatedRoutes } from "./app.inside.routes"
export const Routes = () => {
    const token = "token aqui :)";
    
    return token != null ? <AuthenticatedRoutes /> : <></>
}