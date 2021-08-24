
const menuA={
    kaku3:["좌석 예약전 주의사항","&#8903; 좌석예약은 ID당 1일 1회 신청 가능합니다.","&#8903; 접속 기기의 시간 설정에 따라 신청 페이지 오픈 시각의 차이가 발생할 수 있습니다.","&#8903; 오후 8시 이전에 예약 신청 페이지를 미리 열어두면 오류가 발생할 수 있습니다.","&#8903; 원활한 관람을 위해 공연시작 15분 전까지 착석을 완료해주시기 바랍니다. (공연시작 30분 전부터 착석 가능)","&#8903; 공연시작 10분전까지 입장하지 않을 경우, 이용이 불가합니다.","&#8903; 공연운영에 따라 현장에서 예약하신 좌석과 달리 좌석 배치가 달라질 수 있습니다."]
    
    
}


window.onload=function() {
    /*일반*/
    for(i=0; i<menuA.kaku3.length; i++) {
        $(".kakunin li:eq("+i+")").html(menuA.kaku3[i]);
    }
    
}




var elements = $('.modal-overlay, .modal');

$('button').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


