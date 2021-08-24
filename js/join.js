

// 필수 입력 완료 후 입력 사항이 맞는지 체크
function member_input_check() {
 
    // 이름 체크
    len=js.na.value.length;
    if(len<1) {
        alert("이름은 1글자 이상 입력하세요");
        js.na.focus();
        return;
    }
    for(i=0; i<len; i++) {
        let code=js.na.value.charCodeAt(i);
        if(code<128) {
            alert("이름은 한글로 입력하세요")
            js.na.value="";
            js.na.focus();
            return;
        }
    }
    // 전화번호 체크하기
    if( isNaN(js.tel2.value) || isNaN(js.tel3.value) || js.tel2.value=="" || js.tel3.value=="" )
    {
        alert("전화번호는 숫자만 입력하세요");
        js.tel2.value=""; js.tel3.value="";
        js.tel2.focus();
        return;
    }
    // 주민번호 체크하기
    noA=new Array();
    noA=js.jum.value+js.ju2.value;
    if(noA.length != 13) {
        alert("주민번호는 13자리인지 확인해 주세요");
        js.ju1.value="";
        js.ju2.value="";
        js.ju1.focus();
        return;
    }
    let sum=0;
    k=new Array(2,3,4,5,6,7,8,9,2,3,4,5);
    for(i=0; i<=11; i++)
        sum+=k[i]*noA.substring(i, i+1);  //substr(2, 2)
    nam=sum%11;
    bit=11-nam;
    if(bit != noA.substring(12, 13)) {
        alert("틀린 주민번호 입니다.");
        js.ju1.value="";
        js.ju2.value="";
        js.ju1.focus();
        return;
    }
    alert("회원가입이 완료 되었습닏자.");
    $(".login_window").hide();
}
