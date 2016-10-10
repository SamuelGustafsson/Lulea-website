	$(function() {
		
		//dölj/visa scrolla upp knapp
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		
		//scrolla upp knapp: klick
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });	


	});