setInterval(function () {
  document.querySelectorAll('.set li').forEach(function (element) {
    element.classList.remove('correct-key');
  });

  document.querySelectorAll('.set li')[Math.floor(Math.random() * 12)].classList.add('correct-key');
}, 1000);

document.querySelectorAll('.set li').forEach(function (element) {
  console.log(element);
  element.addEventListener('click', function () {
    element.classList.add('onclick-color-white');
  })
});
