var storage = firebase.storage();
var storageRef = storage.ref();




var i = 0;

storageRef.child('images/').listAll().then(function (result) {
    result.items.forEach(function (imageRef) {
        //console.log("image ref",imageRef.toString());

        i++;
        displayimage(i, imageRef);
    })
})



function displayimage(row, images) {
    images.getDownloadURL().then(function (url) {
        // console.log(url);


        let new_html = '';
        new_html += '<tr>';
        new_html += '<td>';
        new_html += row;
        new_html += '</td>';
        new_html += '<td>';
        new_html += '<img src="' + url + '" width="100" height="100" />';
        new_html += '</td>';
        new_html += '</tr>';



        $('#List').find('tbody').append(new_html);

    })
}