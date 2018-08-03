import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/site'
    : '//localhost:3000/site'

export default {
    query,
    getById,
    getByUserName,
    deleteSite,
    publishSite,
    createNewSite,

    emptySite,
    emptyElement,
    emptySectionElement,

    getSelectedElementById,
    removeSelectedElementById,

    cloneElementById,
    addElementById,
    updateElement,
    getParentById,
    getTypeById,
    moveElementById
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

function deleteSite(site) {
    return axios.delete(`${BASE_URL}/${site._id}`)
        .then(() => true)
        .catch(err => {
            console.log('Error in delete site:', err)
            return false;
        })
}

function publishSite(site) {
    site.date.updated = Date.now()
    return axios.put(`${BASE_URL}/${site._id}`, site)
        .then(res => true)
        .catch(err => {
            console.log('Error in publish site:', err)
            return false;
        })
}

function createNewSite(site) {
    site.date.created = Date.now()
    site.date.updated = Date.now()
    return axios.post(`${BASE_URL}/${site._id}`, site)
        .then(res => res.data)
        .catch(err => {
            console.log('Error in create New Site site:', err)
            return null;
        })
}

function emptySite(userId) {
    return {
        user_id: userId,
        name: 'New Site',
        thumb: '',
        date: {
            created: '',
            updated: ''
        },
        elements: []
    };
}

function emptyElement(type, data = {}, style = {}) {
    style.margin = style.margin || '0';
    style.padding = style.margin || '30px';
    return {
        _id: _makeId(),
        settings: { type },
        data: data,
        styles: style,
        elements: []
    };
}

function emptySectionElement(colsCount = 1) {
    let mainSection = {
        _id: _makeId(),
        settings: {
            type: 'section'
        },
        data: {
            direction: 'row'
        },
        styles: {
            margin: '0 auto 0 auto',
            padding: '30px'
        },
        elements: []
    };
    for (let i = 0; i < colsCount; i++) {
        let innerSection = {
            _id: _makeId(),
            settings: {
                type: 'section'
            },
            data: {
                direction: 'column'
            },
            styles: {
                margin: '0 auto 0 auto',
                padding: '30px'
            },
            elements: []
        };
        mainSection.elements.push(innerSection);
    }
    return mainSection;
}

function _makeId(length = 20) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getSelectedElementById(element, id) {
    if (element._id === id) return element;

    for (let elm of element.elements) {
        let match = getSelectedElementById(elm, id);
        if (match) return match;
    }

    return null;
}

function removeSelectedElementById(element, id) {
    var res = [];
    element.forEach(currElement => {
        if (currElement._id !== id) {
            if (!getSelectedElementById(currElement, id)) res.push(currElement)
            else {
                currElement.elements = removeSelectedElementById(currElement.elements, id);
                res.push(currElement);
            }
        }
    });
    return res;
}

function cloneElementById(element, id) {
    var res = [];
    element.forEach(currElement => {
        if (currElement._id !== id) {
            if (!getSelectedElementById(currElement, id)) res.push(currElement)
            else {
                currElement.elements = cloneElementById(currElement.elements, id);
                res.push(currElement);
            }
        }
        else {
            res.push(currElement);
            var clone = JSON.parse(JSON.stringify(currElement));
            clone._id = _makeId();
            clone.elements = _changeElementsId(clone.elements)
            res.push(clone);
        }
    });
    return res;
}

function _changeElementsId(element) {
    var res = [];
    element.forEach(currElement => {
        currElement._id = _makeId();
        res.push(currElement)
        if (currElement.elements[0]) currElement.elements = _changeElementsId(currElement.elements);
    })
    return res;
}

function updateElement(element, newElement) {
    var res = [];
    element.forEach(currElement => {
        if (currElement._id !== newElement._id) {
            if (!getSelectedElementById(currElement, newElement._id)) res.push(currElement)
            else {
                currElement.elements = updateElement(currElement.elements, newElement);
                res.push(currElement);
            }
        }
        else res.push(newElement);
    })
    return res;
}

function addElementById(element, id, type) {
    if (element.settings && element.data && element.settings.type === 'section' && element.data.direction === 'row') return;
    var res = [];
    element.forEach((currElement, idx) => {
        if (currElement._id !== id) {
            if (!getSelectedElementById(currElement, id)) res.push(currElement)
            else {
                currElement.elements = addElementById(currElement.elements, id, type);
                res.push(currElement);
            }
        }
        else {
            var elementToAdd = emptyElement(type);
            currElement.elements.splice(idx + 1, 0, elementToAdd)
            res.push(currElement);
        }
    })
    return res;
}

function getParentById(details, id) {
    var res = {};
    details.elements.forEach(currElement => {
        if (currElement._id !== id) {
            let isContain = getSelectedElementById(currElement, id);
            if (isContain) res = getParentById(currElement, id);
        }
        else res = details
    })
    return res;
}

function getTypeById(element, id) {
    var res = null;
    element.forEach(currElement => {
        if (currElement._id !== id) {
            let isContain = getSelectedElementById(currElement, id);
            if (isContain) res = getTypeById(currElement.elements, id);
        }
        else res = currElement.settings.type
    })
    return res;
}

function moveElementById(element, id, direction) {
    var alreadyFound = false
    var res = [];
    element.forEach((currElement, idx) => {
        if (currElement._id !== id) {
            if (!getSelectedElementById(currElement, id)) {
                if (alreadyFound) {
                    res[res.length - 2] = currElement
                    alreadyFound = false
                }
                else res.push(currElement)
            }
            else {
                currElement.elements = moveElementById(currElement.elements, id, direction);
                res.push(currElement);
            }
        }
        else {
            if (idx === 0 && direction === 'up' ||
                idx === element.length - 1 && direction === 'down') res.push(currElement)
            else {
                if (direction === 'up') {
                    res.push(currElement);
                    res = _swapArrayElements(res, res.length - 2, res.length - 1)
                }
                else if (direction === 'down') {
                    res[res.length + 1] = currElement
                    alreadyFound = true
                }
            }
        }
    })
    return res;
}

function _swapArrayElements(array, idx1, ix2) {
    if (array.length === 1) return array;
    array.splice(ix2, 1, array.splice(idx1, 1, array[ix2])[0]);
    return array;
};