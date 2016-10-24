$(document).ready(function() {
	////load animations

    // var stade = $('#random-limit'),
    //     stadeWidth = stade.width();
    //     stadeHeight = stade.height();


    // function randomize() {
    //     $('.random').each(function () {
    //          var random = $(this),
    //              randomWidth = random.width(),
    //              randomHeight = random.height(),

    //              randomTop = Math.floor(Math.random() * (stadeWidth-randomWidth)),
    //              randomLeft = Math.floor(Math.random() * (stadeHeight-randomHeight));

    //          random.css({transform: 'translate(' + randomTop + 'px, ' + randomLeft + 'px)'});
    //      });
    // }


    // randomize();


    // setInterval(function(){


    //     randomize();




    // }, 2000);




    ///////	


	$(window).load(function () {

		setTimeout(function(){
		

			$("#load").addClass("out");

			var url = window.location.pathname,
				urlNoBar = url.replace('/', ''),
				urlID = '#'+urlNoBar;



			if(urlNoBar === ''){

				$('#header, #sebrae, #hotmart, #logo span, #graphism, #bg-mask, #menu, #back').removeAttr('class').attr('class', 'home');

			} else {


				$(urlID).addClass('in');
				$('a[href="'+urlNoBar+'"]').addClass('current');

				$('#header, #sebrae, #hotmart, #logo span, #graphism, #bg-mask, #menu, #back').removeAttr('class').attr('class', urlNoBar);

			};

		}, 3000);


	});



	$('*[data-link="true"]').click(function () {

		$('*[data-link="true"]').removeClass('current');

		$(this).addClass('current');

		var linkHash = $(this).attr('href'),
			link = linkHash.replace('#', ''),
			sectionCurrent = $(".section.in");

		console.log(link)

		$('#header, #sebrae, #hotmart, #logo span, #graphism, #bg-mask, #menu, #back').removeAttr('class').attr('class', link);

		sectionCurrent.addClass("out").removeClass("in");

		$('#'+link).addClass("in").removeClass("out");

		setTimeout(function(){
			sectionCurrent.removeClass("out");
		}, 3000);


		window.history.pushState(link, link, link);

		return false;




	});


	$('#menu, #logo').hover(function () {

	

		$('#header').addClass("menu");
		$('#menu').addClass("hover");


	}, function () {

	

		$('#header').removeClass("menu");
		$('#menu').removeClass("hover");


	});





	$("#ano").lettering();




	/////////position datetimelocation

	if (ww > 750) {
		function positionDateTimeLocation() {
			var positionBehanceE = $('#behance-e-02').offset().top+$('#behance-e-02').height(),
				positionPortfolioI = $('#portfolio-i').offset().left,
				positionReviewsS = $('#reviews-s').offset().top;

			$('#dateandtime').css({top:positionReviewsS, left:positionPortfolioI});
			$('#location').css({top:positionBehanceE+6, left:positionPortfolioI});
		}

		positionDateTimeLocation();


		$(window).resize(function() {

			positionDateTimeLocation();
			
		});
	}



	//////


	$('.names-list a').each(function () {


		$(this).hover(function () {
			$('.names-list a, .names-list span, .names-list p span').addClass('inactive');

			$(this).removeClass('inactive');


			var thisClass = $(this).attr('data-name'),
				thisClassIcon = thisClass.replace('#', '');

			$('#organizador-photo, #avaliador-photo').removeAttr('class').addClass(thisClassIcon);


		}, function () {
			$('.names-list a, .names-list span, .names-list p span').removeClass('inactive');
			$('#organizador-photo, #avaliador-photo').removeAttr('class');
		});

	});



	// $('#organizadores').on( "mousemove", function( event ) {


	// 	if (event.pageX > ($(this).width()/3)*1) {

	// 		$(this).find('.names-list').css({'transform':'translateX(-10%)'});​
	// 		$(this).find('p').css({'transform':'translateX(-10%)'});​



	// 	} else if(event.pageX < ($(this).width()/3)*1) {

	// 		$(this).find('.names-list').css({'transform':'translateX(0%)'});​
	// 		$(this).find('p').css({'transform':'translateX(0%)'});​
	// 	};

	// 	if(event.pageX > ($(this).width()/3)*2) {

	// 		$(this).find('.names-list').css({'transform':'translateX(-15%)'});​
	// 		$(this).find('p').css({'transform':'translateX(-15%)'});​

	// 	} 
	// });

	// $('#avaliadores').on( "mousemove", function( event ) {


	// 	if (event.pageX > ($(this).width()/3)*1) {

	// 		$(this).find('.names-list').css({'transform':'translateX(-10%)'});​
	// 		$(this).find('p').css({'transform':'translateX(-10%)'});​



	// 	} else if(event.pageX < ($(this).width()/3)*1) {

	// 		$(this).find('.names-list').css({'transform':'translateX(0%)'});​
	// 		$(this).find('p').css({'transform':'translateX(0%)'});​
	// 	};

	// 	if(event.pageX > ($(this).width()/3)*2) {

	// 		$(this).find('.names-list').css({'transform':'translateX(-22%)'});​
	// 		$(this).find('p').css({'transform':'translateX(-25%)'});​

	// 	} 
	// });







});

$.fn.parallaxHorizontal = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, .8, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance )
	});

};


$.fn.parallaxVertical = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, .8, 
	{
		y : -(( mouse.clientY - (window.innerWidth/2) ) / resistance )
	});

};

$.fn.parallaxCompleto = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, .8, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};

ww = $(window).width();


if (ww > 1270) {

	$(document).mousemove( function( e ) {
		$( '#avaliadores .names-list li' ).parallaxHorizontal( 1.6, e );
		$( '#avaliadores .names-list p' ).parallaxHorizontal( -20, e );

		$( '#organizadores .names-list li' ).parallaxHorizontal( 2, e );
		$( '#organizadores .names-list p' ).parallaxHorizontal( -10, e );

		$( '.photo-parallax' ).parallaxCompleto( -10, e );

		// $('#programacao-col-01, #programacao-col-02, #programacao-col-03').parallaxVertical(-10, e);

	});

}


if (ww > 900 && ww < 1270) {

	$(document).mousemove( function( e ) {
		$( '#avaliadores .names-list li' ).parallaxHorizontal( .6, e );
		$( '#avaliadores .names-list p' ).parallaxHorizontal( 1.5, e );

		$( '#organizadores .names-list li' ).parallaxHorizontal( 1, e );
		$( '#organizadores .names-list p' ).parallaxHorizontal( .6, e );

		$( '.photo-parallax' ).parallaxCompleto( -10, e );

		// $('#programacao-col-01, #programacao-col-02, #programacao-col-03').parallaxVertical(-10, e);

	});

}



if (ww > 750 && ww < 900) {

	$(document).mousemove( function( e ) {
		$( '#avaliadores .names-list li' ).parallaxHorizontal( .4, e );
		$( '#avaliadores .names-list p' ).parallaxHorizontal( 1.5, e );

		$( '#organizadores .names-list li' ).parallaxHorizontal( .5, e );
		$( '#organizadores .names-list p' ).parallaxHorizontal( .3, e );

		$( '.photo-parallax' ).parallaxCompleto( -10, e );

		// $('#programacao-col-01, #programacao-col-02, #programacao-col-03').parallaxVertical(-10, e);

	});
}


if (ww > 750) {

	$('#programacao').on( "mousemove", function( event ) {


		if ( event.pageY < $(this).height()/2 ) {

			$('.programacao-col, #programacao .icon, #logo span').css({'transform':'translateY(0%)'});​
			$('#sebrae, #hotmart').css({'transform':'translateY(300%)'});​

		}


		if(event.pageY > $(this).width()/4 ) {

			$('.programacao-col, #programacao .icon').css({'transform':'translateY(-50%)'});​
			$('#logo span').css({'transform':'translateY(-400%)'});​
			// $('#menu').css({'transform':'translateY(-400px)'});​
			$('#sebrae, #hotmart').css({'transform':'translateY(0%)'});​


		} 

	});

}