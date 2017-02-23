// /**
//  * Created by pawelszymanski on 21.02.17.
//  */

//castles_music
//ode_to_joy

var music = ode_to_joy;


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
// grajNute
// show_note_in_console


var songs_db = [{
  name: "Oda do radości",
  data: ode_to_joy
}];

// dodaj klawisze z piosenkami
$(".buttons-table").append(
  songs_db.map( function (song) {
    console.log(song);
    console.log(song.data);
    return $('<button>').text(song.name).addClass('btn btn-default').click( function () {
      playMusic(song.data, grajNute);
    });
  })
);
