/**
 * Created by peal on 2017-02-25.
 */

//Ustaw stop button
$(".stop-button").click( function() {
    stopMusic();
});

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