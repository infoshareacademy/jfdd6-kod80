function playNote(note) {
  var audio = new Audio('keyboard/'+note+'.mp3');
  audio.play();
}

$('ul.set li').on('click',function () {
  playNote($(this).attr('data-note'));
});


// bartek!!!!!!!!!!!!!!!!!!!!
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
