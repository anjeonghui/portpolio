/*일반*/
const menuA={
    ilh3:["여름 캠퍼스 커플 패키지","여름방학 공포체험","월드카트레이싱","Summer-FUL 얼리버드 예매","픽시매직 교복패키지","롯데월드 투-나잇 PASS","교복입고 키오스크 우대","당일 온라인/모바일 예매 우대","감사합니다, 휴가병사 무료!","감사합니다. 군인간부 할인!","장애인 우대","제휴 맘키즈, 맘베이비 패키지","롯데월드 아쿠아리움", "서울스카이 이용고객 우대","8월 생일자 우대","송파구민, 자매도시 거주민 우대","문화누리카드 우대","연간이용 동반객 우대","상시 우대 혜택","라라 키즈 어드벤처 제휴 우대","아쿠아리움 연간이용 우대"],
    ilbanimg:["ilban0.jpg","ilban1.jpg","ilban2.jpg","ilban3.jpg","ilban4.jpg","ilban5.jpg","ilban6.jpg","ilban7.jpg","ilban8.jpg","ilban9.jpg","ilban10.jpg","ilban11.jpg","ilban12.jpg","ilban13.jpg","ilban14.jpg","ilban15.jpg","ilban16.jpg","ilban17.jpg","ilban18.jpg","ilban19.jpg"],
    
   lih5:["62900원","27500원","31500원","43% 할인","42% 할인","20000원","46% 할인","38% 할인","무료","30000원","50% 할인","46% 할인","49% 할인","46% 할인","44% 할인","49% 할인","최대 50% 할인","23500원","i49% 할인","59000원"],
    card3:["하나카드 전 회원 프로모션","제휴카드 온라인 예매 프로모션","제휴카드 현장 프로모션","BC카드 마이셀렉트 프로모션"],
    cardimg:["card0.jpg","card1.jpg","card2.jpg","card3.jpg"],
    card5:["26,000원","19,900원","27,500원","25,000원"],
    mem3:["KT멤버십 1+1 혜택(헤어밴드 증정)","해피포인트 상시 우대 프로모션","M포인트 프로모션","삼성포인트 프로모션","SKT 기본제휴","온라인 간편결제 프로모션","유플러스 멤버십-나만의 콕"],
    memimg:["mem0.jpg","mem1.jpg","mem2.jpg","mem3.jpg","mem4.jpg","mem5.jpg","mem6.jpg"],
    mem5:["29,500원","37,000원","17,000원",".",,"40% 할인","37% 할인","29,500원"]
    
}


window.onload=function() {
    /*일반*/
    for(i=0; i<menuA.ilh3.length; i++) {
        $(".ilban_img h3:eq("+i+")").html(menuA.ilh3[i]);
    }
    for(i=0; i<menuA.ilbanimg.length; i++) {
       $(".ilban_img li:eq("+i+")").
            css({"background":"url(img/ilban/"+menuA.ilbanimg[i]+")",
                 "backgroundSize":"100% 100%"});
    }
    for(i=0; i<menuA.lih5.length; i++) {
        $(".ilban_img h5:eq("+i+")").html(menuA.lih5[i]);
    }
    /*카드*/
     for(i=0; i<menuA.card3.length; i++) {
        $(".card_img h3:eq("+i+")").html(menuA.card3[i]);
    }
    for(i=0; i<menuA.cardimg.length; i++) {
       $(".card_img li:eq("+i+")").
            css({"background":"url(img/card/"+menuA.cardimg[i]+")",
                 "backgroundSize":"100% 100%"});
    }
    for(i=0; i<menuA.card5.length; i++) {
        $(".card_img h5:eq("+i+")").html(menuA.card5[i]);
    }
    
    
    
    /*멤버십*/
    
   for(i=0; i<menuA.mem3.length; i++) {
        $(".mem_img h3:eq("+i+")").html(menuA.mem3[i]);
    }
    for(i=0; i<menuA.memimg.length; i++) {
       $(".mem_img li:eq("+i+")").
            css({"background":"url(img/mem/"+menuA.memimg[i]+")",
                 "backgroundSize":"100% 100%"});
    }
    for(i=0; i<menuA.mem5.length; i++) {
        $("mem_img h5:eq("+i+")").html(menuA.mem5[i]);
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