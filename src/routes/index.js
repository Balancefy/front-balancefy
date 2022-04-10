import { AuthenticatedRoutes } from "./app.inside.routes"
import { OutsideRoutes } from "./app.outside.routes";

export const Routes = () => {
    const token = "aa";
    
    return token != null ? <AuthenticatedRoutes /> : <OutsideRoutes/>
}