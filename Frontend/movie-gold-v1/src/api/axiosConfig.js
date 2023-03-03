import axios from 'axios';


// needed for Client HTTP requests to not be blocked by CORS

// Via ngrok tunnel - to allow users not on local host to access api
    // Run server on Spring Boot
    // ngrok http 8080 -> ngrok cmd exe
    // copy ngrok URL to baseURL below

    // export default axios.create({
    //     baseURL:'https://628d-95-144-107-187.eu.ngrok.io',
    //     headers: {
    //         "ngrok-skip-browser-warning": "any",
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // });

    
// Via local host 8080

export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});