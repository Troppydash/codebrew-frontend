import Navbar from "./components/navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";


import Login from "./pages/login.jsx";
import {AuthContext} from "./lib/auth.js";
import {useEffect, useState} from "react";
import Error from "./pages/404.jsx";
import Logout from "./pages/logout.jsx";

import './app.css';
import './components.css';
import Register from "./pages/register.jsx";

export default function App() {
    const [loaded, setLoaded] = useState(false);
    // this app component handles the auth
    const [auth, setAuth] = useState({
        username: 'unknown',
        authenticated: false,
    });

    // try to login on render
    useEffect(() => {
        // check if authenticated
        const jwt = localStorage.getItem('auth_jwt');
        const username = localStorage.getItem('auth_username');
        if (jwt == null || username == null) {
            setLoaded(true);
            return;
        }

        setAuth({
            username,
            authenticated: true
        });
        setLoaded(true);
    }, []);


    return (
        <div className="main-page">
            <AuthContext.Provider value={{auth, setAuth}}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="*" element={<Error/>}/>
                        <Route path="/" element={<Home/>}/>
                        {
                            loaded && (
                                auth.authenticated
                                    ? <Route path="/logout" element={<Logout/>}/>
                                    : <>
                                        <Route path="/login" element={<Login/>}/>
                                        <Route path="/register" element={<Register/>}/>
                                    </>
                            )
                        }
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}
