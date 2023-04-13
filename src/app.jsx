import Navbar from "./components/navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";

import './app.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
])

export default function App() {
    return (
        <div className="main-page">
            <Navbar />
            <RouterProvider router={router} />
        </div>
    );
}
