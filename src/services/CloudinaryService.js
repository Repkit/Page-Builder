const CLOUD_NAME = "shuvy"

var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`


export default {
    uploadImg ,
    doUploadImg
}

// on submit call to this function
function uploadImg(elForm, ev) {
    // ev.preventDefault();
    console.log(elForm,'eldorm');
    
   
    // A function to be called if request succeeds
    function onSuccess(res) {
        console.log('uploadedImg', res);
        console.log('uploadedImg', res.url);
    }
    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    var formData = new FormData();
    formData.append('file', elForm[0].files[0])
    formData.append('upload_preset', 'pluzods3');

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
    .then(function (response) {
        return response.json()
    })
    // .then(onSuccess)
    // .catch(function (error) {
    //     console.error(error)
    // })
}
