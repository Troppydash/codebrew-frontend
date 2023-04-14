import "./about.css";
import {Link} from "react-router-dom";
import Footer from "../components/footer.jsx";

export default function About() {
    return <div className="about-page">
        <div className="about-slide about-slide-1">
            <div>
                <h1 className="cb-big-title">About Us</h1>
                <h3 className="cb-big-subtitle">Add Descriptions</h3>
            </div>
        </div>
        <div className="about-slide about-slide-2">
            <div>
                <h1 className="cb-big-title">Your Benefits</h1>
                <h3 className="cb-big-subtitle">Add Descriptions</h3>
            </div>
        </div>
        <div className="about-slide about-slide-3">
            <div>
                <Link to="/login" className="cb-link cb-button cb-button--outline">GET STARTED</Link>
                <Footer />
            </div>
        </div>
    </div>
}