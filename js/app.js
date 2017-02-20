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
        alert("Zaznacza zapoznanie się ze zgodą dotyczącą przetwarzania adresu e-mail.");
    } else if (email == '' || !email.match(emailReg)) {
        alert("Wprowadź poprawny adres e-mail.");
    } else {
        window.location.href = "#popup2";
    }
}