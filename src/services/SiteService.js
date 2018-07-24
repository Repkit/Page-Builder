import axios from 'axios';

// const BASE_URL = (process.env.NODE_ENV !== 'development')
//     ? '/site'
//     : '//localhost:3000/site'

// const BASE_URL = 'mongodb://page_builder_user:page_builder43@ds145921.mlab.com:45921/page_builder/site';
const BASE_URL = '//localhost:3000/site';

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data);
}

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(res => res.data);
}

export default {
    query,
    getById
}
