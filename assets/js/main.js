/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// Can also be used with $(document).ready()






(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);


/*slide img*/

$(function() {
  var winW = cnt = setId = 0;
  resizeFn();

  function resizeFn() {
    winW = $(window).innerWidth();
    $(".slide").css({
      width: winW
    });
  };

  $(window).resize(function() {
    resizeFn();
  });

  autoplayFn();

  function autoplayFn() {
    setId = setInterval(nextCountFn, 2500);
  };

  $(".pageBt").each(function(idx) {
    $(this).click(function() {
      clearInterval(setId);
      cnt = idx;
      mainslideFn();
    });
  });

  function nextCountFn() {
    cnt++;
    mainslideFn();
  };

  function prevCountFn() {
    cnt--;
    mainslideFn();
  };

  function mainslideFn() {
    $(".slideWrap").stop().animate({
      left: (-100 * cnt) + "%"
    }, 600, function() {
      if (cnt > 3) {
        cnt = 0;
      }
      if (cnt < 0) {
        cnt = 3
      }
      $(".slideWrap").stop().animate({
        left: (-100 * cnt) + "%"
      }, 0)
    });
    $(".pageBt").removeClass("addPageBt");
    $(".pageBt").eq(cnt > 3 ? cnt = 0 : cnt).addClass("addPageBt");
  };
});


/*hover*/
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );