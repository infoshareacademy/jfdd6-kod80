// /**
//  * Created by pawelszymanski on 21.02.17.
//  */

//castles_music
//ode_to_joy
//asturia

/*****************
 * Obsluga funkcji
 */

var show_note_in_console = (nazwa_nuty, duration) => {
  console.log(nazwa_nuty, duration);
}

var timeouts = [];

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
var songs_db = [
  {
  name: "Oda do radości",
  data: ode_to_joy
  },
  {
    name: "Dancing Bear",
    data: dancing_bear
  },
  {
    name: "Old MacDonald",
    data: old_macdonald
  },{
    name: "Auclaire",
    data: auclaire
  },
  {
    name: "Row the Boat Ashore",
    data: row_the_boat
  }, {
    name: "Daisy",
    data: daisy
  }, {
    name: "L'aviron",
    data: aviron
  },
  {
    name: "Nothing else matters",
    data: nothing_else_matters
  }
];

// dodaj klawisze z piosenkami
$("#music_buttons").append(
  songs_db.map( function (song) {
    console.log(song);
    console.log(song.data);
    return $('<button>').text(song.name).addClass('btn btn-default').click( function () {
      stopMusic();
      playMusic(song.data, grajNute);
    });
  })
);

function stopMusic() {
  notesTable.stopMusic();
  timeouts.forEach( (timeout) => clearTimeout(timeout));

//quick reset of the timer array you just cleared
  timeouts = [];
  notesTable.clear();

  //usun podswietlenia klawiszy
  $(".set li").removeClass('correct-key');
}

//Ustaw stop button
$(".stop-button").click( function() {
  stopMusic();
});