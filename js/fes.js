let no, pos;
$(function() {
    $("html, body").animate({scrollTop:0},500);
    $(".fsmenu li").on("click", function(){    
        no=$(this).index();
        pos=1100*no;
        $("html, body").animate({scrollTop:pos+"px"},500);
    })
})


$(document).ready(function() { $('.btn-1').click(function() { $('.hot').load('./sec1_slide1.html'); return false; }); });


$(document).ready(function() { $('.btn-2').click(function() { $('.para').load('./sec1_slide2.html'); return false; }); });

/*sec3 탭메뉴*/
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


 var myFullpage = new fullpage('#fullpage', {
        verticalCentered: false,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3:false
    });







