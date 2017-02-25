/**
 * Created by pawelszymanski on 22.02.17.
 */

function noteIdentity(note) {
  switch(note) {
    case 'C#4':
      return 'cis4';
      break;
    case 'D#4':
      return 'es4';
      break;
    case 'F#4':
      return 'fis4';
      break;
    default:
      return note.toLowerCase();
  }
}

function playNote(note, duration) {
  var audio = new Audio('keyboard/'+note+'.mp3');
  if (duration == void 0 || isNaN(duration)) {
    audio.play();
  } else {
    audio.loop = true;
    audio.play();
    const czasGrania = duration * 1000;

    setTimeout(function () {
        audio.pause();
    }, czasGrania);
  }
}

$('ul.set li').on('click',function () {
  playNote($(this).attr('data-note'));
});

function dodajKolor(note_id, duration ) {
  const stala_czas_podswietlania = duration*1000;
  var $element = $(" li[data-note="+note_id.toLowerCase()+"]");

  $element.addClass('correct-key');
  setTimeout(function () {
    $element.removeClass('correct-key');
  }, stala_czas_podswietlania);
  console.log(note_id);

}

function grajNute(nazwa_nuty, duration) {
  if( nazwa_nuty !== void 0) {
    dodajKolor(nazwa_nuty, duration);
    playNote(noteIdentity(nazwa_nuty), duration);
  }
}