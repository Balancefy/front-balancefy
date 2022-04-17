import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Comments from "../pages/Comments";

import Forum from "../pages/Forum";
import Home from "../pages/Home";
import LoginLoading from "../pages/LoginLoading";
import Profile from "../pages/Perfil";
import NotFound from '../pages/404'


export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<LoginLoading />} />
                <Route path="/forum" element={<Forum/>} />
                <Route path="/comments" element={<Comments/>} />
                <Route path="/profile"  element={<Profile/>} />
            </Routes>
        </ Router>
    )
}