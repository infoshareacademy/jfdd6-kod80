/**
 * Created by karolinakreft on 16.02.17.
 */

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

      showAlert();
      document.getElementById("textBox").innerHTML = "Nie zaznaczono zgody.";


  } else if (email == '' || !email.match(emailReg)) {

      showAlert();
      document.getElementById("textBox").innerHTML = "Wprowadź poprawny adres e-mail.";

  } else {
    window.location.href = "#popup2";
  }
}


function alertCheckbox () {
    var whitebg = document.getElementById("alert-background");
    var alertBox = document.getElementById("alert-box");
    whitebg.style.display = "none";
    alertBox.style.display = "none";
}
function showAlert() {
    var whitebg = document.getElementById("alert-background");
    var alertBox = document.getElementById("alert-box");
    whitebg.style.display = "block";
    alertBox.style.display = "block";

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    alertBox.style.left = (winWidth/2) - 480/2 + "px";
    alertBox.style.top = "150px";

}
