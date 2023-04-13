import './404.css';
import {Link} from "react-router-dom";

export default function Error() {
    return (
        <div className="error-page">
            <h1>404 Not Found</h1>
            <div>
                <Link to="/" className="cb-link">Go to home</Link>
            </div>
        </div>
    )
}