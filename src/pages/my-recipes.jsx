import "./my-recipes.css";
import {useState} from "react";
import Recipe from "../components/recipe.jsx";
import Footer from "../components/footer.jsx";

const MOCK_RECIPES = [
    {
        name: 'test1',
        ingredients: [
            'milk',
            'what'
        ],
        cost: 12
    },
    {
        name: 'test1',
        ingredients: [
            'milk',
            'what'
        ],
        cost: 12
    },
    {
        name: 'test1',
        ingredients: [
            'milk',
            'what'
        ],
        cost: 12
    },{
        name: 'test1',
        ingredients: [
            'milk',
            'what'
        ],
        cost: 12
    },
    {
        name: 'test1',
        ingredients: [
            'milk',
            'what'
        ],
        cost: 12
    },
    {
        name: 'test1',
        ingredients: [
            'milk',
            'what'
        ],
        cost: 12
    }
]

export default function MyRecipes() {

    const [recipes, setRecipes] = useState(MOCK_RECIPES);


    return <div className="recipes-page">
        <h1 className="cb-page-title">My Recipes</h1>
        <div className="recipes-my">
            {
                recipes.map(rec => (
                    <Recipe {...rec}/>
                ))
            }
        </div>
        <Footer />
    </div>
}