import React from "react";
import { Link } from "react-router-dom";
import '../list_article_styles.css';
export default function HeaderArticlesComponent(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 h-50">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <h4>conduit</h4>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signin"} className="nav-link">Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}