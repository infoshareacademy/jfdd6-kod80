/**
 * Created by pawelszymanski on 17.02.17.
 */

$('.tu-bede-nawigowal').on('scrollSpy:enter', function() {
  console.log('enter:', $(this).attr('id'));
  var idOfVisibleElement = $(this).attr('id');
  const koncowka_id_nav = '_nav';
  $('#' + idOfVisibleElement + koncowka_id_nav).css('color', 'red');
});

$('.tu-bede-nawigowal').on('scrollSpy:exit', function() {
  console.log('exit:', $(this).attr('id'));
});

$('.tu-bede-nawigowal').scrollSpy();
