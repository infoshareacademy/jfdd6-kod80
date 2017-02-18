// /**
//  * Created by karolinakreft on 16.02.17.
//  */

function ValidationEvent() {
// Storing Field Values In Variables
    var email = document.getElementById("podajMaila").value;
// Regular Expression For Email
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// Conditions
    if (!document.getElementById("zgoda1").checked) {
        alert("1");
    } else if (!document.getElementById("zgoda2").checked) {
        alert("2");
    } else if (email == '' || !email.match(emailReg)) {
        alert("3");
    } else {
        window.location.href = "#popup2";
    }
}