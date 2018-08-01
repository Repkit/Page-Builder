const CLOUD_NAME = 'shuvy';
var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export default {
    uploadImg,
    doUploadImg
}

// Call this function on submit
function uploadImg(elForm, ev) {
    // ev.preventDefault();
    console.log(elForm, 'eldorm');

    // Call this function on successful request
    function onSuccess(response) {
        console.log('uploadedImg', response);
        console.log('uploadedImg', response.url);
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    var formData = new FormData();

    formData.append('file', elForm[0].files[0])
    formData.append('upload_preset', 'pluzods3');

    return fetch(UPLOAD_URL, { method: 'POST', body: formData })
        .then(response => response.json())
        // .then(onSuccess)
        // .catch(err => console.error(err));
}
