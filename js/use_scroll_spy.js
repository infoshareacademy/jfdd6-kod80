/**
 * Created by pawelszymanski on 17.02.17.
 */
var dodajFocusStyle = (selector) => {
  $(selector).focus();
}
$('.tu-bede-nawigowal').on('scrollSpy:enter', function() {
  console.log('enter:', $(this).attr('id'));
  var idOfVisibleElement = $(this).attr('id');
  const koncowka_id_nav = '_nav';
  var selector = "#" + idOfVisibleElement + koncowka_id_nav;
  dodajFocusStyle(selector);
});

$('.tu-bede-nawigowal').on('scrollSpy:exit', function() {
  console.log('exit:', $(this).attr('id'));
});

$('.tu-bede-nawigowal').scrollSpy();
