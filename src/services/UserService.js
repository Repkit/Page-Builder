import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/user'
    : '//localhost:3000/user';

export default {
    query,
    addUser,
    updateUser,
    removeUser,
    getUserById,
}

function query(filterBy = { id: '', name: '' }) {
    let queryParams = '';
    if (filterBy.id) queryParams += `id=${filterBy.id}&`;
    if (filterBy.name) queryParams += `name=${filterBy.name}&`;

    return axios.get(`${BASE_URL}?${queryParams}`)
        .then(res => res.data);
}

function addUser(newUser) {
    return axios.post(`${BASE_URL}`, newUser)
        .then(res => res.data);
}

function updateUser(updatedUser) {
    return axios.put(`${BASE_URL}/${updatedUser._id}`, updatedUser)
        .then(res => res.data);
}

function removeUser(userId) {
    return axios.delete(`${BASE_URL}/${userId}`);
}

function getUserById(userId) {
    return axios.get(`${BASE_URL}/${userId}`)
        .then(res => res.data);
}
