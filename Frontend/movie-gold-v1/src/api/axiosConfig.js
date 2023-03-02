import axios from 'axios';


// needed for Client HTTP requests to not be blocked by CORS
export default axios.create({
    baseURL:'https://e95e-95-144-107-187.eu.ngrok.io',
    headers: {
        "ngrok-skip-browser-warning": "any",
        'Access-Control-Allow-Origin': '*'
    }
});