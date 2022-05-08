import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Comments from "../pages/Comments";

import Forum from "../pages/Forum";
import Home from "../pages/Home";
import Profile from "../pages/Perfil";
import NotFound from '../pages/404'
import Goals from '../pages/Goals';
import TestsComponents from "../pages/TestsComponents";


export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Navigate to="/" replace />} />
                <Route path="/forum" element={<Forum/>} />
                <Route path="/comments" element={<Comments/>} />
                <Route path="/profile"  element={<Profile/>} />
                <Route path="/goals"  element={<Goals/>} />
                <Route path="/test"  element={<TestsComponents/>} />
            </Routes>
        </ Router>
    )
}