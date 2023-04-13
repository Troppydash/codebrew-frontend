import Navbar from "./components/navbar.jsx";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";


import Login from "./pages/login.jsx";
import {AuthContext} from "./lib/auth.js";
import {useEffect, useState} from "react";
import Error from "./pages/404.jsx";
import Logout from "./pages/logout.jsx";

import './app.css';
import './components.css';

export default function App() {
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
            return;
        }

        setAuth({
            username,
            authenticated: true
        });
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
                            auth.authenticated ? <Route path="/logout" element={<Logout/>}/>
                                : <Route path="/login" element={<Login/>}/>
                        }

                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}
