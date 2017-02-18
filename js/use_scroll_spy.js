/**
 * Created by pawelszymanski on 17.02.17.
 */


var nav_Ids = (selector) => {
	return $(".tu-bede-nawigowal").toArray().map( (element) => { return $(element).attr("id") } )
};

var visibleElements = new Set();

var dodajFocusStyle = (selector) => {
  $(selector).focus();
}

var createSelector = (id) => {
	 const koncowka_id_nav = '_nav';
	 return "#" + id + koncowka_id_nav;
}

var sorted_visibleElements = () => { return nav_Ids().filter( e => visibleElements.has(e) )};

var top_element_id= () => {
	return 	sorted_visibleElements()[0];
}


$('.tu-bede-nawigowal').on('scrollSpy:enter', function() {
  console.log('enter:', $(this).attr('id'));

  var idOfVisibleElement = $(this).attr('id');
  var selector = createSelector(idOfVisibleElement);

  dodajFocusStyle(selector);
  visibleElements.add(idOfVisibleElement);
});

$('.tu-bede-nawigowal').on('scrollSpy:exit', function() {
  console.log('exit:', $(this).attr('id'));

  var idOfVisibleElement = $(this).attr('id');
  var selector = createSelector(idOfVisibleElement);
	visibleElements.delete(idOfVisibleElement);


});

$('.tu-bede-nawigowal').scrollSpy();
