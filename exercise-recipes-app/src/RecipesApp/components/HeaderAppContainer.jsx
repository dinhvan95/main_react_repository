import React from "react";
import { Link } from "react-router-dom";
import "../Style_Recipes_App.css";

export default function HeaderAppContainer() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 h-50">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/recipebook"} className="nav-link active">Recipe Book</Link>
                            </li>


                            <li className="nav-item">
                                <Link to={"/recipes"} className="nav-link">Recipes</Link>
                            </li>


                            <li className="nav-item">
                                <Link to={"/shoppinglist"} className="nav-link">Shopping List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}