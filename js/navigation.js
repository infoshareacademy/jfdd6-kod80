/**
 * Created by pawelszymanski on 16.02.17.
 */
$(document).on('click', '.nawigacja a', function(event){
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});