import "./home.css";
import {Link} from "react-router-dom";
import Footer from "../components/footer.jsx";

export default function Home() {
    return <div className="home-page">
        <div className="home-slide home-slide-1">
            <div>
                <h1 className="cb-big-title">Catchy Phrase</h1>
                <h3 className="cb-big-subtitle">
                    Cooking Up Meals
                    <br/>
                    And Savings
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    GET STARTED!
                </button>
            </div>
        </div>
        <div className="home-slide home-slide-2">
            <div>
                <h1 className="cb-big-title">Cost Calculator</h1>
                <h3 className="cb-big-subtitle">
                    sed do eiusmod tempor
                    <br/>
                    incididunt ut labore et
                    <br/>
                    dolore magna aliqua.
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    How much does your meal cost?
                </button>
            </div>
        </div>
        <div className="home-slide home-slide-1">
            <div>
                <h1 className="cb-big-title">Healthy Recipes</h1>
                <h3 className="cb-big-subtitle">
                    sed do eiusmod tempor
                    <br/>
                    incididunt ut labore et
                    <br/>
                    dolore magna aliqua.
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    Cheap and healthy recipes
                </button>
            </div>
        </div>
        <div className="home-slide home-slide-2">
            <div>
                <h1 className="cb-big-title">Community</h1>
                <h3 className="cb-big-subtitle">
                    sed do eiusmod tempor
                    <br/>
                    incididunt ut labore et
                    <br/>
                    dolore magna aliqua.
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    Cheap and healthy recipes
                </button>
            </div>
        </div>

        <div className="home-footer">
            <Footer />
        </div>
    </div>
}