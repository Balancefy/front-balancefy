import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Comments from "../pages/Comments";

import Forum from "../pages/Forum";
import Home from "../pages/Home";
import Profile from "../pages/Perfil";

export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/forum" element={<Forum/>} />
                <Route path="/comments" element={<Comments/>} />
                <Route path="/profile"  element={<Profile/>} />
            </Routes>
        </ Router>
    )
}