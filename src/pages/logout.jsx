import {Link, Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../lib/auth.js";

export default function Logout() {
    const {auth, setAuth} = useContext(AuthContext);

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        setShouldRedirect(true);

        setTimeout(() => {

            localStorage.removeItem('auth_jwt');
            localStorage.removeItem('auth_username');
            setAuth({
                username: 'unknown',
                authenticated: false
            })
        }, 500);
    }, []);


    return (
        <div className="logout-page">
            {shouldRedirect && <Navigate to="/" />}
        </div>
    )
}