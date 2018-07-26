export default {
    emptyElement,
    getSelectedElementById,
    makeId
}

function emptyElement(type) {
    let data = {};
    if (type === 'section') data = { layout: 'boxed', width: '1200px' }; // layout: boxed/full_width

    let style = {};
    if (type === 'section') style = { margin: '0', padding: '10px', color: 'blue', minHeight: '100px' };

    return {
        _id: makeId(20),
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

// function getSelectedElementById(element, selected) {
//     //console.log( 'search for id:', selected );
//     //console.log( 'search current id:', element._id );
//     //console.log( 'search element:', element );

//     // current element check
//     if (element._id === selected) return element;

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

//     // If non found
//     return null;
// }

function makeId(length = 20) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}