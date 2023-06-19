import axios from 'axios';
import { backend } from "../constants/conifg";
import cookie from "react-cookies";

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;


// const config = {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'X-CSRFToken': cookie.load('csrftoken')
//     }
// };

// const client = axios.create({
//     baseURL: "http://127.0.0.1:8000"
//   });

const get = () => axios.get('');

const register = (payload) => axios.post(
    'http://localhost:8000/api/register/', payload)



export default {
    get,
    register,
};
