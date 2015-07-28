$(function(){
	function header(){
		var btn = $(".header button"),
				tm = $(".top-menu nav"),
				win = $(window),
				doc = $(document);
		btn.click(function(){
			tm.slideToggle();
		});
		win.resize(function(){
			if(doc.width()>600){
				tm.slideDown();
			}
		});
	}
	header();
});
