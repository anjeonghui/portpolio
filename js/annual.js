
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})




$(document).on("click", ".naccs .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
});