import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Forum from "../pages/Forum";
import Home from "../pages/Home";

export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/forum" element={<Forum/>} />
            </Routes>
        </ Router>
    )
}