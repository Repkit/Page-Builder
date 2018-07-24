import axios from 'axios';

// const BASE_URL = process.env.NODE_ENV !== 'development'
//     ? ''
//     : '//localhost:3000';

const BASE_URL = 'mongodb://page_builder_user:page_builder43@ds145921.mlab.com:45921/page_builder';

function login({ username }) {
    return axios.put(`${BASE_URL}/login`, { username })
        .then(res => res.data);
}

export default {
    login
}
