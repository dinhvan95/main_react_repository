import React, { useEffect, useState } from "react";
import { getListUsers } from "../../api/api";
import "../list_article_styles.css";
import CardComponent from "./CardComponent";
import FeedbackComponent from "./FeedbackComponent";

export default function BodyArticlesComponent() {
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
        <div className="banner">
            <h1>conduit</h1>
            A place to share your knowledge.
        </div>
    );
    <FeedbackComponent data = {data}/>
}