import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Institucional from "../pages/Institucional";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro"; 
import NotFound from '../pages/404'

export const OutsideRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/" element={<Institucional />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </ Router>
    )
}