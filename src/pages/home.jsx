import "./home.css";
import {Link} from "react-router-dom";
import Footer from "../components/footer.jsx";

export default function Home() {
    return <div className="home-page">
        <div className="home-slide">
            <div>
                <h1 className="cb-fancy home-title">Frugalicious!</h1>
                <h3 className="cb-big-subtitle">
                    Cooking up savings with every meal
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    GET STARTED!
                </button>
            </div>
        </div>
        <div className="home-slide home-slide-2">
            <div>
                <h1 className="cb-big-title">
                    What Food's Frugal?
                    <br/>
                    Don't Ask Google. Ask Us!
                </h1>
                <h3 className="cb-big-subtitle">
                    Frugalicious! We compile a list of ingredients and
                    <br/>
                    their estimated costs on demand.
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    How Much Does Your Meal Cost?
                </button>
            </div>
        </div>
        <div className="home-slide home-slide-1">
            <div>
                <h1 className="cb-big-title">Designed to Make a Difference</h1>
                <h3 className="cb-big-subtitle">
                    Frugalicious! We generate a list of possible
                    <br/>
                    cheap and healthy meals from the selected
                    <br/>
                    ingredients for you.
                </h3>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    Cheap and Healthy Recipes
                </button>
            </div>
        </div>
        <div className="home-slide home-slide-2">
            <div>
                <h1 className="cb-big-title">
                    Penny-pinchers?
                    <br/>
                    No.
                    <br/>
                    Economical consumers?
                    <br/>
                    Yes!
                </h1>
                <button className="cb-button cb-button--outline"
                        style={{minWidth: '200px'}}>
                    Cheap and Healthy recipes
                </button>
            </div>
        </div>

        <div className="home-footer">
            <Footer />
        </div>
    </div>
}