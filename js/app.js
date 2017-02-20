/**
 * Created by karolinakreft on 16.02.17.
 */

<<<<<<< Updated upstream
=======
function ValidationEvent() {
// Storing Field Values In Variables
    var email = document.getElementById("podajMaila").value;
// Regular Expression For Email
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// Conditions
    if (!document.getElementById("zgoda1").checked) {
        alert("Nie możemy poinformować Cie o premierze drogą elektroniczną, bez zaznaczenia na to zgody :(");
    } else if (email == '' || !email.match(emailReg)) {
        alert("Ups! Chyba wpisałeś niepoprawny adres e-mail.");
    } else {
        window.location.href = "#popup2";
    }
}
>>>>>>> Stashed changes
