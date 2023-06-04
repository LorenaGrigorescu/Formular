import axios from 'axios';

export default axios.create({
    baseURL: 'http://10.152.1.178:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});