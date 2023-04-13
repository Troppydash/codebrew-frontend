import Navbar from "./components/navbar.jsx";
import {createBrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";

import './app.css';
import './components.css';
import Login from "./pages/login.jsx";
import {AuthContext, authLogin} from "./lib/auth.js";
import {useEffect, useState} from "react";
import Error from "./pages/404.jsx";

const router = createBrowserRouter([
    {
        errorElement: <Error/>,
        element: <NavbarLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },

]);


// layout file for all pages using the navbar
function NavbarLayout() {
    return <>
        <Navbar />
        <Outlet />
    </>
}


export default function App() {
    // this app component handles the auth
    const [auth, setAuth] = useState({
        username: 'unknown',
        authenticated: false,
    });

    // try to login on render
    useEffect(() => {
        // const jwt = await authLogin()
    }, []);


    return (
        <div className="main-page">
            <AuthContext.Provider value={{auth, setAuth}}>
            <RouterProvider router={router} />
            </AuthContext.Provider>
        </div>
    );
}
