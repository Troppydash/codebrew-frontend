import "./login.css";
import {useState} from "react";
import {authLogin} from "../lib/auth.js";
import {Link} from "react-router-dom";

export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();

        // send login
        setError('');
        setIsFetching(true);

        try {
            const jwt = await authLogin({username, password});
        } catch (err) {
            console.log(err);
            setError(err);
        }

        setIsFetching(false);
    }


    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-shift">
                    <h1 className="login-form-title">Login to your account</h1>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="email"
                                   value={username}
                                   onChange={e => setUsername(e.currentTarget.value)}/>
                        </div>
                        <div>
                            <input placeholder="password"
                                   value={password}
                                   onChange={e => setPassword(e.currentTarget.value)}/>
                        </div>
                        {
                            error && <div className="login-form-error">
                                <span>{error}</span>
                            </div>
                        }
                        <div>
                            <button type="submit" disabled={isFetching} className="cb-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-right">
                <div className="login-shift">
                    <h2 className="login-right-title">Don't have an account?</h2>
                    <p className="login-right-text">
                        Make an account now
                    </p>

                    <Link to="/register" className="login-signup cb-button cb-link">Signup</Link>
                </div>
            </div>
        </div>
    )
}