import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Comments from "../pages/Comments";

import Forum from "../pages/Forum";
import Home from "../pages/Home";

export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/forum" element={<Forum/>} />
                <Route path="/comments" element={<Comments/>} />
            </Routes>
        </ Router>
    )
}