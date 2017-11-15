$(function(){
	$(":text").focus(function(){
		$(this).css("color","#000")
	})
	var nstr=getCookie("info");
	var narr=JSON.parse(nstr);
	
	
	//手机号验证
	var flagName=null;
	$(".iphone").blur(function(){
		/*var reg=/^1[5738]\d{9}$/;
		var str=$(this).val();
		if(reg.test(str)){
			flagName=true;
		}else{
			$("#i1").html("用户名不合法").css("color","red");
			flagName=false;
		}*/
		if(narr[0].uname==$(this)){
			flagName=true;
		}else{
			flagName=false;
			$("#i1").html("用户名不正确").css("color","red");
		}
		
		$("#i1,#i2,#i3,#i4").hide().val("");

	});
	
	//密码
	var flagPwd=null;
	$(".cpwd").blur(function(){
		var str=$(this).val();
		var reg=/\w+.{5,19}/;
		if (reg.test(str)) {
//			$("#s4").html("合法");
			flagPwd=true;
		}else{
			$("#i3").html("密码不合法").css("color","red");
			flagPwd=false;
		}
		$("#i1,#i2,#i3,#i4").hide().val("");
	})
	//确认密码
	var flagRpwd=null;
	$(".qpwd").blur(function(){
		if($(this).val()==$(".cpwd").val()){
//			$("#s5").html("合法");
			flagRpwd=true;
		}else{
			$("#i4").html("密码不一致").css("color","red");
			flagRpwd=false;
		}
		$("#i1,#i2,#i3,#i4").hide().val("");
	})
	
	$("#i1,#i2,#i3,#i4").hide();
	//注册成功
	var arr=[];
	$(".forgetsubmit").click(function(){
		$("#i1,#i2,#i3,#i4").show();
		
		if(flagName&&flagPwd&&flagRpwd){
			var json={
				"uname":$(".iphone").val(),
				"pwd":$(".cpwd").val()
			}
			arr.push(json);
			setCookie("info",JSON.stringify(arr));
//			location.href="login.html";
		}
	})
	
	function getRand(min,max){
		return Math.round( Math.random()*(max-min) + min );
	}
	
})

