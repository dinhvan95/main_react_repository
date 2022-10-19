import React, { useEffect, useState }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyArticlesComponent from "./components/BodyArticlesComponent";
import FeedbackComponent from "./components/FeedbackComponent";
import HeaderArticlesComponent from "./components/HeaderArticlesComponent";
import SigninComponent from "./components/SigninComponent";
import SignupComponent from "./components/SignupComponent";
import "./list_article_styles.css";
import {getListUsers} from "../api/api";

export default function ListArticlesContainer() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        getListUsers().then(
            (result) => {
                setData((pre) => (pre = result));
                setIsLoading(false);
            }).catch((error) => {
                setData([]);
                setIsLoading(false);
            });
    }
        , []);
    useEffect(() => { 
        console.log("data", data)
     }, [data]);
    return (
        <BrowserRouter>
            <HeaderArticlesComponent />
            <BodyArticlesComponent />
            <FeedbackComponent data = {data}/>
            <Routes>
                <Route path="./signin" element={<SigninComponent />}>Sign in</Route>
                <Route path="./signup" element={<SignupComponent />}>Sign up</Route>
            </Routes>
        </BrowserRouter>
    );
}