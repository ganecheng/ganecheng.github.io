(function($)
{
	"use strict";

	$('.navbar-collapse ul li a').click(function()
	{
		/* always close responsive nav after click */
		$('.navbar-toggle:visible').click();
	});

	$('#galleryModal').on('show.bs.modal', function(e)
	{
		var imageSrcOrig = $('#galleryImage').attr("src");
		var imageSrcDest = $(e.relatedTarget).data("src");
		if (imageSrcOrig != imageSrcDest)
		{
			$('#galleryImage').attr("src", imageSrcDest);
		}
		
		var musicSrcOrig=$('#music_frame').attr("src");
		var musicSrcDest=$('#music_frame').attr("data-src").replace("DATAID", $(e.relatedTarget).data("music-id"));
		if(musicSrcOrig!=musicSrcDest)
		{
			$('#music_frame').attr("src", musicSrcDest);
		}
	});

})(jQuery);
