import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? ''
    : '//localhost:3000';

export default {
    login,
    logout
}

function login(user) {
    return axios.put(`${BASE_URL}/login`, user)
        .then(res => res.data);
}
function logout() {
    return axios.post(`${BASE_URL}/logout`)
        .then(res => res.data);
}
