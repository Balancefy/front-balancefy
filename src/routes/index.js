import { AuthenticatedRoutes } from "./app.inside.routes"
import { OutsideRoutes } from "./app.outside.routes";

export const Routes = () => {
    const token = "a";
    
    return token != null ? <AuthenticatedRoutes /> : <OutsideRoutes/>
}