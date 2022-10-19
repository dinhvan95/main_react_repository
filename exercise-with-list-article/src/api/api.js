import ListArticle from "../list_articles.json";
import axios from 'axios';

const apiUrl = `https://api.realworld.io/api/articles/?limit=10&offset=2`;

// export const getList = async () => {
//     const result = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//             "dataType": "application/json",
//             "withCredentials": "true",
//             "crossorigin": "true",

//         },
//         "mode": 'no-cors',
//     }).then((response) => response.json())
//     .then((responseData) => {
//         console.log("responseData",responseData);
//     })
//     return result;
// }
export const getListUsers = async () => {
    const result = await axios({
        method: 'get',
        baseURL: apiUrl,
    })
    console.log('result', result?.data)
    return result?.data
}