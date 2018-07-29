export default {
    emptyElement,
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

function _makeId(length = 20) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
