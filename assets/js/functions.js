$(document).ready(function() {
	////load animations

    var stade = $('#random-limit'),
        stadeWidth = stade.width();
        stadeHeight = stade.height();


    function randomize() {
        $('.random').each(function () {
             var random = $(this),
                 randomWidth = random.width(),
                 randomHeight = random.height(),

                 randomTop = Math.floor(Math.random() * (stadeWidth-randomWidth)),
                 randomLeft = Math.floor(Math.random() * (stadeHeight-randomHeight));

             random.css({transform: 'translate(' + randomTop + 'px, ' + randomLeft + 'px)'});
         });
    }


    randomize();


    setInterval(function(){


        randomize();




    }, 1000);




    ///////	


	$(window).load(function () {

		var url = window.location.pathname,
			urlNoBar = url.replace('/', ''),
			urlID = '#'+urlNoBar;



		if(urlNoBar === ''){

			$('#header, #sebrae, #hotmart, #logo a, #graphism, #bg-mask, #menu ul').removeAttr('class').attr('class', 'home');

		} else {


			$(urlID).addClass('in');
			$('a[href="'+urlNoBar+'"]').addClass('current');

		};


	});



	$('*[data-link="true"]').click(function () {

		$('*[data-link="true"]').removeClass('current');

		$(this).addClass('current');

		var linkHash = $(this).attr('href');
			link = linkHash.replace('#', '');
			sectionCurrent = $(".section.in");

		$('#header, #sebrae, #hotmart, #logo a, #graphism, #bg-mask, #menu ul').removeAttr('class').attr('class', link);

		sectionCurrent.addClass("out").removeClass("in");

		$('#'+link).addClass("in").removeClass("out");

		setTimeout(function(){
			sectionCurrent.removeClass("out");
		}, 3000);


	});




	$("#ano").lettering();




	/////////position datetimelocation

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




	//////


	$('.names-list a').each(function () {


		$(this).hover(function () {
			$('.names-list a, .names-list span, .names-list p').addClass('inactive');

			$(this).removeClass('inactive');


			var thisClass = $(this).attr('data-name'),
				thisClassIcon = thisClass.replace('#', '');

			$('#organizador-photo, #avaliador-photo').removeAttr('class').addClass(thisClassIcon);


		}, function () {
			$('.names-list a, .names-list span, .names-list p').removeClass('inactive');
			$('#organizador-photo, #avaliador-photo').removeAttr('class');
		});

	});



	$('#organizadores').on( "mousemove", function( event ) {


		if (event.pageX > ($(this).width()/3)*1) {

			$(this).find('.names-list').css({'transform':'translateX(-10%)'});​
			$(this).find('p').css({'transform':'translateX(-10%)'});​



		} else if(event.pageX < ($(this).width()/3)*1) {

			$(this).find('.names-list').css({'transform':'translateX(0%)'});​
			$(this).find('p').css({'transform':'translateX(0%)'});​
		};

		if(event.pageX > ($(this).width()/3)*2) {

			$(this).find('.names-list').css({'transform':'translateX(-15%)'});​
			$(this).find('p').css({'transform':'translateX(-15%)'});​

		} 
	});

	$('#avaliadores').on( "mousemove", function( event ) {


		if (event.pageX > ($(this).width()/3)*1) {

			$(this).find('.names-list').css({'transform':'translateX(-10%)'});​
			$(this).find('p').css({'transform':'translateX(-10%)'});​



		} else if(event.pageX < ($(this).width()/3)*1) {

			$(this).find('.names-list').css({'transform':'translateX(0%)'});​
			$(this).find('p').css({'transform':'translateX(0%)'});​
		};

		if(event.pageX > ($(this).width()/3)*2) {

			$(this).find('.names-list').css({'transform':'translateX(-22%)'});​
			$(this).find('p').css({'transform':'translateX(-25%)'});​

		} 
	});




	$('#programacao').on( "mousemove", function( event ) {


		if ( event.pageY < $(this).height()/2 ) {

			$('.programacao-col, #programacao .icon, #logo a, #menu').css({'transform':'translateY(0%)'});​
			$('#sebrae, #hotmart').css({'transform':'translateY(300%)'});​

		}


		if(event.pageY > $(this).width()/2 ) {

			$('.programacao-col, #programacao .icon').css({'transform':'translateY(-50%)'});​
			$('#logo a').css({'transform':'translateY(-400%)'});​
			$('#menu').css({'transform':'translateY(-400px)'});​
			$('#sebrae, #hotmart').css({'transform':'translateY(0%)'});​


		} 

	});









});