/**
 * Created by pawelszymanski on 22.02.17.
 */

// function playNote(nuta) {
//
//   switch(nuta) {
//     case 'white-b':
//       var audio = new Audio('white-b.mp3');
//       break;
//     case '"white-a'
//       var audio = new Audio('white-a.mp3');
//       break;
//
//       audio.play();
//   }
// }




function dodajKolor(note_id, duration ) {
  // setInterval(function () {
  //   document.querySelectorAll('.set li').forEach(function (element) {
  //     element.classList.remove('correct-key');
  //   });
  //
  //   document.querySelectorAll('.set li')[Math.floor(Math.random() * 12)].classList.add('correct-key');
  // }, 1000);
  //
  // document.querySelectorAll('.set li').forEach(function (element) {
  //   console.log(element);
  //   element.addEventListener('click', function () {
  //     element.classList.add('onclick-color-white');
  //   })
  // });

  const stala_czas_podswietlania = duration*1000;

  console.log(stala_czas_podswietlania);

  var $element = $("#"+note_id);

  $element.addClass('correct-key');
  setTimeout(function () {
    $element.removeClass('correct-key');
  }, stala_czas_podswietlania);
  console.log(note_id);

}

function grajNute(nazwa_nuty, duration) {
  dodajKolor(nazwa_nuty, duration);
}