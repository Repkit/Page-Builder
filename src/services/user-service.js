import axios from 'axios'
import moment from 'moment'

// const USER_URL = (process.env.NODE_ENV !== 'development')? '/user'
//     : '//localhost:3003/user';

const USER_URL = 'mongodb://page_builder_user:page_builder43@ds145921.mlab.com:45921/page_builder/user';

export default {
    addUser,
    updateUser,
    query,
    removeUser,
    getUserById,
}

function query() {
    return axios.get(USER_URL)
        .then(res => res.data)
}

function addUser(newUser) {
    console.log('new user', newUser)
    return axios.post(USER_URL, newUser)
        .then(res => res.data)
}

function updateUser(updatedUser) {
    return axios.put(`${USER_URL}/${updatedUser._id}`, updatedUser)
        .then(res => res.data)
}

function removeUser(userId) {
    return axios.delete(`${USER_URL}/${userId}`)

}

function getUserById(userId) {
    return axios.get(`${USER_URL}/${userId}`)
        .then(res => res.data)
}

