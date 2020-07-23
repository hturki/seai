/*****************************************************************
** Allows to trigger animation of svg. The svg must provide the 
** following interface: 
    document.next = function() {
	// start animation when fragment is shown
    }
    document.prev = function() {
	// start animation when fragment is hidden
    }

** The slide must include an svg in an object or iframe with an id.
** When specifying the fragment this id must be given in the
** data-svg attribute. E.g.
**
** <object id="svg1" data="test.svg" ></object>
** <div class="fragment" data-animate="svg1" data-animate-id>Click</div>
******************************************************************/

(function(){
	Reveal.addEventListener( 'fragmentshown', function( event ) {
		if ( event.fragment.dataset.animate != undefined ) {
			document.getElementById( event.fragment.dataset.animate ).contentDocument.next();
		}
	} );

	Reveal.addEventListener( 'fragmenthidden', function( event ) {
		if ( event.fragment.dataset.animate != undefined ) {
			document.getElementById( event.fragment.dataset.animate ).contentDocument.prev();
		}
	} );
})();

/*************************************

Warum nicht svg mit data-src laden?

1. Expect data-animate-start / data-animate-stop giving [lists of] id's for animation objects for all fragments with data-animate

2. On fragmentshown event execute object.contentDocument.show( event.fragment.dataset.animate.id )
// get all elements with id
	      document.getElementById(event.fragment.dataset.animate.stop).endElement();
// get all elements with id
	      document.getElementById(event.fragment.dataset.animate.start).beginElement();

3. On fragmenthidden event execute object.contentDocument.show( event.fragment.dataset.animate.id-1 ) if index > 0
// get all elements with id
	      document.getElementById(event.fragment.dataset.animate.start).endElement();
// get all elements with id
	      document.getElementById(event.fragment.dataset.animate.stop).beginElement();

4. On slidechanged event check whether and what has to be done
5. Add javascript to svg? Expect svg to include <animateTransform id="1"> ... </animateTransform>




*************************************/