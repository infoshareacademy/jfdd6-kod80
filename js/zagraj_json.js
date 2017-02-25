// /**
//  * Created by pawelszymanski on 21.02.17.
//  */

/*****************
 * Obsluga funkcji
 */

var show_note_in_console = (nazwa_nuty, duration) => {
  console.log(nazwa_nuty, duration);
}

var timeouts = [];

var notesTable ={
  table: []
};

notesTable.push = function(note) {
  this.table.push( note );
}

notesTable.clear = function() {
  this.table = [];
}

notesTable.stopMusic = function() {
  this.table.forEach( (audio) => audio.pause() );
};

var zagraj = (nazwa_nuty, time, duration, callback_play_note) => {

  function Nuta(nazwa_nuty, time, duration, callback_play_note) {
      this.nazwa_nuty = nazwa_nuty;
      this.time = time;
      this.duration = duration;

      this.play = function () {
        callback_play_note(this.nazwa_nuty, this.duration);
      };
  }

  var nuta = new Nuta(nazwa_nuty, time, duration, callback_play_note);

  var playNoteTimeoutID = setTimeout(function() {
    nuta.play();
  }, time*1000);
  timeouts.push( playNoteTimeoutID );
}

var playTrack = (track, callback_play_note) => {
  if (track.notes !== void 0) {
    track.notes.forEach( (note) => {
    const nazwa_nuty = note.name;
    const time = note.time;
    const duration = note.duration;

    zagraj(nazwa_nuty, time, duration, callback_play_note);
    });
  }
};

/*
 * Graj muzyko - uzyj odpowiedniej funkcji do grania nuty
 * @param - plik JSON z muzyka, callback grajacy nute
 */
// grajNute
// show_note_in_console
var playMusic = (music, callback_play_note) => {
  music.tracks.forEach((track) => {
    playTrack(track, callback_play_note);
  });
};
/******************************************************************/

function stopMusic() {
  notesTable.stopMusic();
  timeouts.forEach( (timeout) => clearTimeout(timeout));

//quick reset of the timer array you just cleared
  timeouts = [];
  notesTable.clear();

  //usun podswietlenia klawiszy
  $(".set li").removeClass('correct-key');
}