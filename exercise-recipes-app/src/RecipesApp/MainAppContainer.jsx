import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyAppContainer from "./components/BodyAppContainer";
import HeaderAppContainer from "./components/HeaderAppContainer";

export default function MainAppContainer() {
    return (
        <BrowserRouter>
            <HeaderAppContainer/>
            <BodyAppContainer/>
            <Routes>
                <Route path="./recipebook"></Route>
                <Route path="./recipes"></Route>
                <Route path="./shoppinglist"></Route>
            </Routes>
        </BrowserRouter>
    );
}