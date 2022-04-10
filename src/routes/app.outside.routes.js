import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Institucional from "../pages/Institucional";

export const OutsideRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Institucional/>} />    
            </Routes>
        </ Router>
    )   
}