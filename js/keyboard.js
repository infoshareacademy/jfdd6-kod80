// zamien kod klawisza na odpowadajacy mu dzwiek
function keyboardIntoSound(keyCode) {
    return $('li[data-key=' + keyCode + ']').attr('data-note');
}

// po nacisnieciu klawisza odpal dzwiek
$(document).keyup(function (event) {
    grajNute(keyboardIntoSound(event.keyCode), 1);
})
//    document.addEventListener("keydown", function (event) {
//      console.log(event.keyCode);
//    });
//
//      $(document).keyup(function (event) {
//        console.log(event.keyCode)
//      });

