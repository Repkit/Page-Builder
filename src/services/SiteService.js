import axios from 'axios';

// const BASE_URL = (process.env.NODE_ENV !== 'development')
//     ? '/site'
//     : '//localhost:3000/site'

// const BASE_URL = 'mongodb://page_builder_user:page_builder43@ds145921.mlab.com:45921/page_builder/site';
const BASE_URL = '//localhost:3000/site';

export default {
    query,
    getById,
    getByUserName,

    getSelectedElementById,
    removeSelectedElementById,
    cloneElementById,
}

function query(filterBy = { name: '', user_id: '' }) {
    return axios.get(`${BASE_URL}?name=${filterBy.name}&user_id=${filterBy.user_id}`)
        .then(res => res.data);
}

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(res => res.data);
}

function getByUserName(userName) {
    return axios.get(`${BASE_URL}/user/${userName}`)
        .then(res => res.data);
}

function getSelectedElementById(element, id) {
    // Current element check
    if (element._id === id) return element;

    // Recursive inner elements check
    for (let elm of element.elements) {
        let match = getSelectedElementById(elm, id);
        if (match) return match;
    }

    // If non found
    return null;
}

function removeSelectedElementById(element, id) {
    var res = []
    element.forEach(currElement => {
        if (currElement._id !== id) {
            if (!getSelectedElementById(currElement, id)) res.push(currElement)
            else {
                currElement.elements = removeSelectedElementById(currElement.elements, id)
                res.push(currElement)
            }
        }
    })
    return res
}

function cloneElementById(element, id) {
    var res = []
    element.forEach(currElement => {
        if (currElement._id !== id) {
            if (!getSelectedElementById(currElement, id)) res.push(currElement)
            else {
                currElement.elements = cloneElementById(currElement.elements, id)
                res.push(currElement)
            }
        }
        else {
            res.push(currElement)
            var cloned = JSON.parse(JSON.stringify(currElement))
            cloned._id = _makeId()
            res.push(cloned)
        }
    })
    return res

}
