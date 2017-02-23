/**
 * Created by pawelszymanski on 22.02.17.
 */

function playNote(note) {
  var audio = new Audio('keyboard/'+note+'.mp3');
  audio.play();
}

$('ul.set li').on('click',function () {
  playNote($(this).attr('data-note'));
});

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

  var $element = $(" li[data-note="+note_id.toLowerCase()+"]");

  $element.addClass('correct-key');
  setTimeout(function () {
    $element.removeClass('correct-key');
  }, stala_czas_podswietlania);
  console.log(note_id);

}

// function () {
//
// }

function grajNute(nazwa_nuty, duration) {
  dodajKolor(nazwa_nuty, duration);
  playNote(  nazwa_nuty.toLowerCase() );
}