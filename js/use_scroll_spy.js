/**
 * Created by pawelszymanski on 17.02.17.
 */
$('.tu-bede-nawigowal').on('scrollSpy:enter', function() {
  console.log('enter:', $(this).attr('id'));
});

$('.tu-bede-nawigowal').on('scrollSpy:exit', function() {
  console.log('exit:', $(this).attr('id'));
});

$('.tu-bede-nawigowal').scrollSpy();
