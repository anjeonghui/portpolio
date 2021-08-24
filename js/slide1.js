/* 전역변수 */
// 페이지들
var Page__$pages;
// 페이지 개수
var Page__pagesCount;

/* 초기화 함수들 */
// 페이지 관련 요소들을 초기화 한다.
function Page__init() {
    Page__initVars();
    Page__initElAttrs();
    Page__initSideBarMenu1Item();
    Page__initMouseWheel();
    Page__initKeyUp();
}

// 필수적인 전역변수들을 초기화 한다.
function Page__initVars() {
    Page__$pages = $('.pages-box > div');
    Page__pagesCount = Page__$pages.length;
}

// 필수적인 엘리먼트 속성들을 초기화한다.
function Page__initElAttrs() {
    Page__setCurrentIndex(0);
}

// 사이바 메뉴1 아이템을 초기화한다.
function Page__initSideBarMenu1Item() {
    $('.side-bar > .menu-1 > ul > li').click(function() {
        var index = $(this).index();
        Page__moveTo(index);
    });
}

function Page__initMouseWheel() {
    $('.box-1').bind("mousewheel DOMMouseScroll", function(e) {
        var isUp = true;

        if ( e.originalEvent.wheelDelta < 0 ) {
            isUp = false;
        }
        
        if ( isUp ) {
            if ( Page__isCurrentPageFirst() == false ) {
                Page__movePrev();
                e.preventDefault();
            }
        }
        else {
            if ( Page__isCurrentPageLast() == false ) {
                Page__moveNext();
                e.preventDefault();
            }
        }
    });
}

function Page__initKeyUp() {
    $(window).keyup(function(e) {
        if ( e.keyCode == 37 || e.keyCode == 38 ) {
            Page__movePrev();
        }
        else if ( e.keyCode == 39 || e.keyCode == 40 ) {
            Page__moveNext();
        }
    });
}

/* 게터, 세터 */
function Page__isCurrentPageFirst() {
    return Page__getCurrentIndex() == 0;
}

function Page__isCurrentPageLast() {
    return Page__getCurrentIndex() + 1 == Page__pagesCount;
}

function Page__getCurrentIndex() {
    var index = $('body').attr('data-current-page-index');
    index = parseInt(index);
    
    return index;
}

function Page__setCurrentIndex(index) {
    $('body').attr('data-current-page-index', index);
}

function Page__getPositionLeft() {
    var pageIndex = Page__getCurrentIndex();
    
    return pageIndex * -100 + '%';
}

/* 갱신함수 */
function Page__updateSideBarMenu1Item() {
    var pageIndex = Page__getCurrentIndex();
    
    $('.side-bar > .menu-1 > ul > li.active').removeClass('active');
    $('.side-bar > .menu-1 > ul > li').eq(pageIndex).addClass('active');
}

function Page__updatePositionLeft() {
    var newPositionLeft = Page__getPositionLeft();
    
    $('.pages-box').stop().animate({
        left:newPositionLeft
    }, 500);
}

/* 사용자 이벤트 함수 */
function Page__moveNext() {
    var index = Page__getCurrentIndex();

    Page__moveTo(index + 1);
}

function Page__movePrev() {
    var index = Page__getCurrentIndex();

    Page__moveTo(index - 1);
}

/* 코어로직 */
function Page__moveTo(pageIndex) {
    if ( pageIndex < 0 ) {
        pageIndex = 0;
    }
    else if ( pageIndex >= Page__pagesCount ) {
        pageIndex = Page__pagesCount - 1;
    }
    
    Page__setCurrentIndex(pageIndex);
    
    Page__updateSideBarMenu1Item();
    Page__updatePositionLeft();
}

/* 초기화 실행 */
Page__init();