/*코스*/
const menuA={
    cos1:["10:30","11:00~","12:00~","13:00~","14:30~","코스종료"],
    cosimg:["cos0.png","cos1.png","cos2.png","cos3.png","cos4.png","cos5.png"],
   cos2:["프리미엄 고객 맞이","놀이시설 탑승","식사","공연 참여/관람","놀이시설 탑승","고객배웅"],
   mobt1:["10:30","11:00~","12:00~","13:00~","14:30~","코스종료"],
    mobtimg1:["cos0.png","cos1.png","cos2.png","cos3.png","cos4.png","cos5.png"],
    mobt2:["프리미엄 고객 맞이","놀이시설 탑승","식사","공연 참여/관람","놀이시설 탑승","고객배웅"]
}


window.onload=function() {
    /*코스*/
    for(i=0; i<menuA.cos1.length; i++) {
        $(".text_box li:eq("+i+")").html(menuA.cos1[i]);
    }
    for(i=0; i<menuA.cosimg.length; i++) {
       $(".png_box li:eq("+i+")").
            css({"background":"url(img/fare/"+menuA.cosimg[i]+")",
                 "backgroundSize":"100% 100%"});
    }
    for(i=0; i<menuA.cos2.length; i++) {
        $(".text1_box li:eq("+i+")").html(menuA.cos2[i]);
    }
   
    /*tab1모바일*/
    
     for(i=0; i<menuA.mobt1.length; i++) {
        $(".png_boxm span:eq("+i+")").html(menuA.mobt1[i]);
    }
    for(i=0; i<menuA.mobtimg1.length; i++) {
       $(".png_boxm li:eq("+i+")").
            css({"background":"url(img/fare/"+menuA.mobtimg1[i]+")",
                 "backgroundSize":"100% 100%"});
    }
    for(i=0; i<menuA.mobt2.length; i++) {
        $(".png_boxm p:eq("+i+")").html(menuA.mobt2[i]);
    }
    
    
}

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

// Acc
$(document).on("click", ".naccs0 .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs0 .menu div").removeClass("active");
    $(".naccs0 ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs0 ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs0 ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs0 ul").height(listItemHeight + "px");
  }
});
// Acc
$(document).on("click", ".naccs1 .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs1 .menu div").removeClass("active");
    $(".naccs1 ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs1 ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs1 ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs1 ul").height(listItemHeight + "px");
  }
});


// Acc
$(document).on("click", ".naccs2 .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs2 .menu div").removeClass("active");
    $(".naccs2 ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs2 ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs2 ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs2 ul").height(listItemHeight + "px");
  }
});

// Acc
$(document).on("click", ".naccs3 .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs3 .menu div").removeClass("active");
    $(".naccs3 ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs3 ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs3 ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs3 ul").height(listItemHeight + "px");
  }
});

// Acc
$(document).on("click", ".naccs4 .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs4 .menu div").removeClass("active");
    $(".naccs4 ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs4 ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs4 ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs4 ul").height(listItemHeight + "px");
  }
});
