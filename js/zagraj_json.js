// /**
//  * Created by pawelszymanski on 21.02.17.
//  */

var music = castles_music;

console.log(music);

console.log( castles_music.tracks[1].notes );

var zagraj = (nazwa_nuty, time, duration) => {
  console.log(nazwa_nuty);
  console.log(time);
  console.log(duration);
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


  // track.forEach( (note) => {

  // });
};


castles_music.tracks.forEach( (track) => {
  // console.log(track);
  playTrack( track );

});



// castles_music.tracks[1].notes.forEach( (note) => {
//
// });