import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Institucional from "../pages/Institucional";
import Login from "../pages/Login"; 

export const OutsideRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Institucional/>} />    
                <Route path="/login" element={<Login/>} />    
            </Routes>
        </ Router>
    )   
}