import axios from 'axios';

// const USER_URL = (process.env.NODE_ENV !== 'development')
//     ? '/user'
//     : '//localhost:3000/user';

const BASE_URL = 'mongodb://page_builder_user:page_builder43@ds145921.mlab.com:45921/page_builder/user';

export default {
    addUser,
    updateUser,
    query,
    removeUser,
    getUserById,
}

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data);
}

function addUser(newUser) {
    console.log('new user', newUser)
    return axios.post(BASE_URL, newUser)
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
