export default {
    emptyElement,
    getSelectedElementById,
    removeSelectedElementById,
    cloneElementById,
}

function emptyElement(type) {
    let data = {};
    if (type === 'section') data = { layout: 'boxed', width: '1200px' }; // layout: boxed/full_width

    let style = {};
    if (type === 'section') style = { margin: '0', padding: '10px', color: 'blue', minHeight: '100px' };

    return {
        _id: _makeId(20),
        settings: { type },
        data: data,
        styles: style,
        elements: []
    };
}

function getSelectedElementById(element, id) {
    // current element check
    if (element._id === id) return element;

    // recursive inner elements check
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
// function getSelectedElementById(element, selected) {
//
//     // current element check
//     if (element._id === selected) return element;
//
//     // recursive inner elements check
//     if (!element._id) {
//         for (let i = 0; i < element.length; i++) {
//             let found;
//             if (getSelectedElementById(element[i], selected)) return element[i];
//             else if (element[i].elements) {
//                 found = getSelectedElementById(element[i].elements, selected)
//                 if (found) return found;
//             }
//         }
//     }
//
//     // If non found
//     return null;
// }

function _makeId(length = 20) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
