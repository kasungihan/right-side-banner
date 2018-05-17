(function($) {

	//var pluginName = "rzButton";
	$.rzButton = function(options) {
		var settings = $.extend({
			url: '#',
			color: '#000000',
			background: '#EfAfff',
			thumLogo: 'icon-logo.png',
			img: 'radicalz-logo.png',
			title: 'OWNED &amp; MANAGED BY'
		}, options);
			
		var coreStyle = {
			html: "<a href=\""+ settings.url +"\" id='ridden' class='ridden' style=\"position: fixed;z-index: 150;top:0;right:0;background-color: "+ settings.background +";font-family: sans-serif;padding: 5px 0px 10px 10px;border-radius: 0 0 0 34px;text-decoration: none;\">\n<img id='thumImg' src=\"" + settings.thumLogo +"\">\n<div id='titleImg' style='text-align:center;display: none;'>\n<p style='margin:0;color:"+ settings.color +";font-size: 12px;'>"+ settings.title +"</p>\n<img src=\""+ settings.img +"\">\n</div>\n</a>"
		};

        $(document).on({
		    mouseenter: function () {
		        $( ".ridden" ).css({ padding: '5px 5px 5px 10px', borderRadius: '0 0 0 68px' });
		        $( "#thumImg" ).css({ opacity: 0, display: 'none'});
    			$( "#titleImg" ).css({ opacity: 1, display: 'block', transition : ' opacity 1s ease-out'});
		    },
		    mouseleave: function () {
		    	$( ".ridden" ).css({ padding: '5px 0px 10px 10px', borderRadius: '0 0 0 34px' });
		        $( "#thumImg" ).css({ opacity: 1, display: 'block', transition : ' opacity 1s ease-out' });
            	$( "#titleImg" ).css({ opacity: 0, display: 'none' });
		    }
		}, "#ridden");

		$("body").append(coreStyle.html);
	}

} (jQuery));
