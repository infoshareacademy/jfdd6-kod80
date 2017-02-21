// /**
//  * Created by pawelszymanski on 21.02.17.
//  */

var music = castles_music;

// console.log(music);
//
// console.log( castles_music.tracks[1].notes );



var zagraj = (nazwa_nuty, time, duration) => {
  // console.log(nazwa_nuty);
  // console.log(time);
  // console.log(duration);

  function Nuta(nazwa_nuty, time, duration) {
      this.nazwa_nuty = nazwa_nuty;
      this.time = time;
      this.duration = duration;

      this.play = function () {
        console.log(this.nazwa_nuty, this.duration);
      };
  }
  var nuta = new Nuta(nazwa_nuty, time, duration);

  var playNoteTimeoutID = setTimeout(function() {
    nuta.play();
  }, time*1000);
}

var playTrack = (track) => {
  if (track.notes !== void 0) {
    track.notes.forEach( (note) => {
    const nazwa_nuty = note.name;
    const time = note.time;
    const duration = note.duration;

    zagraj(nazwa_nuty, time, duration);
    });
  }
};

var playMusic = (music) => {
  music.tracks.forEach((track) => {
    playTrack(track);
  });
};

playMusic(castles_music);
