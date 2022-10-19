import React from "react";
import "../list_article_styles.css";
import { dateUpdateAt } from "../helpers/index.js"
export default function FeedbackComponent({ data }) {
    console.log("data is received", data.articles)
    return (
        <table className="table">
            <thead>
                <th>Global feed</th>
            </thead>
            <tbody>
                {data.articles.map((el, index) => (
                    <tr key={index}>
                        <div>
                            <div className="d-flex flex-row">
                                <div>
                                    <img src={el.author.image} />
                                </div>
                                <div className="d-flex flex-column mx-2">
                                    <b className="username">{el.author.username}</b>
                                    <p className="updateAt">{dateUpdateAt(el.updatedAt)}</p>
                                </div>
                            </div>
                            <div>
                                <p>Sum love: {el.favoritesCount}</p>
                            </div>
                            <div className="titleDiv">
                                {el.title}
                            </div>
                            <div className="desDiv">
                                {el.description}
                            </div>
                        </div>
                        <button className="btnDiv">Read more...</button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}