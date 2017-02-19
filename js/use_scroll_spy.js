/**
 * Created by pawelszymanski on 17.02.17.
 */
	
//tablica wszystkich elementow nawigacji  
var nav_Ids = (selector) => {
	return $(".tu-bede-nawigowal").toArray().map( (element) => { return $(element).attr("id") } )
};

var visibleElements = new Set();

var dodajFocusStyle = (selector) => {
  $(selector).focus();
}

//utworz selector
// @param - id
// @return string #id_nav
var createSelector = (id) => {
	 const koncowka_id_nav = '_nav';
	 return "#" + id + koncowka_id_nav;
}

var sorted_visibleElements = () => { return nav_Ids().filter( e => visibleElements.has(e) )};

var top_element_id= () => {
	return 	sorted_visibleElements()[0];
}

var middle_element_id = () => {
	return sorted_visibleElements()[Math.floor(sorted_visibleElements().length / 2)];
}

var bottom_element_id = () => {
  let ids = nav_Ids();
  return ids[ids.length - 1] ;
}

var focus_element = (id) => {
	const selector = createSelector(id);
	dodajFocusStyle(selector);
}


/*„DOBRZY ARTYSCI KOPIUJA, WIELCY KRADNA.” PICASSO
* Element wziety dzieki uprzejmosci: "John Smart", 
*Wykrywamy kiedy element pojawia sie na ekranie i kiedy znika
*Jeśli jest widoczny dodaj do zbioru elementów widocznch, jeśli znika usuń
*
*/

$('.tu-bede-nawigowal').on('scrollSpy:enter', function() {
  // console.log('enter:', $(this).attr('id'));

  var idOfVisibleElement = $(this).attr('id');
  var selector = createSelector(idOfVisibleElement);
  visibleElements.add(idOfVisibleElement);

  focus_element( middle_element_id() );
});

$('.tu-bede-nawigowal').on('scrollSpy:exit', function() {
  // console.log('exit:', $(this).attr('id'));

  var idOfVisibleElement = $(this).attr('id');
  var selector = createSelector(idOfVisibleElement);
  visibleElements.delete(idOfVisibleElement);
});


//****************************************//


//Sprawdz czy scrollSpy zostal uruchomionu
let isSpying = false;
var startSpying = () => {
  if (isSpying == false) {
    $('.tu-bede-nawigowal').scrollSpy();
    isSpying = true;  }
};

//do wykrywania czy kliknieto link w nawigacji
let isClick = false;
 var clickedElement_id 

$("#navbar a").click( function() {
  isClick = true;
  clickedElement_id = $(this).attr("id");
})



//wywołaj funkcje gdy scroll zattrzymal sie
$.fn.scrollStopped = function(callback) {
  var that = this, $this = $(that);
  $this.scroll(function(ev) {
    clearTimeout($this.data('scrollTimeout'));
    $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
  });
};

//Uruchom scroll Spy przy pierwszym ruchy scrolla
//
$(document).scroll( () => {
  startSpying();

//wybierz element do focus
  focus_element( middle_element_id() );

//Gdy zatrzyma sie scroll sprawdz czy przedtem kliknieto link
// jesli kliknieto link dodaj focus w odpowiednim miejscu
$(window).scrollStopped(function(ev){
  if (isClick == true) {
    dodajFocusStyle( "#" +clickedElement_id );
    isClick = false;
  }
});

 //rozpoznaj czy jestesm na gorze ekranu i zaznacz pierwszy element nawigacji
  if($(window).scrollTop()  == 0) {
    focus_element( top_element_id() );
   }

//rozpoznaj czy jestesm na dole ekranu i zaznacz dolny element nawigacji
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
       focus_element( bottom_element_id() );
   }
});

//Focus pierwszy, gorny element - wyswietlanie przy pierwszym wyswietlaniu obrazu
focus_element(nav_Ids()[0]);
