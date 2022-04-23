import React from "react";
import { AuthContext } from "../contexts/auth";
import { AuthenticatedRoutes } from "./app.inside.routes"
import { OutsideRoutes } from "./app.outside.routes";

export const Routes = () => {
    const { user } = React.useContext(AuthContext);
    
    return user != null ? <AuthenticatedRoutes /> : <OutsideRoutes/>
}