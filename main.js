// 3 -Require thie package in your main.js
const axios = require("axios");

// 4- Send a get request to this endpoint : 'https://random-words-api.vercel.app/word'
//		and print the result of the request in the console
const URL = "https://www.npmjs.com/package/chalk";

axios.get(URL)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        error
    });