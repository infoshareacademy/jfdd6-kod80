// /**
//  * Created by pawelszymanski on 21.02.17.
//  */

var music = castles_music;


/*****************
 * Obsluga funkcji
 */
var show_note_in_console = (nazwa_nuty, duration) => {
  console.log(nazwa_nuty, duration);
}

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

var playMusic = (music, callback_play_note) => {
  music.tracks.forEach((track) => {
    playTrack(track, callback_play_note);
  });
};
/******************************************************************/


/*
* Graj muzyko - uzyj odpowiedniej funkcji do grania nuty
* @param - plik JSON z muzyka, callback grajacy nute
 */

playMusic(castles_music, show_note_in_console);
