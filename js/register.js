$(function(){
	$(":text").focus(function(){
		$(this).css("color","#000")
	})
	//手机号验证
	var flagName=null;
	$(".uname").blur(function(){
		$("#s1").show();
		var reg=/^1[5738]\d{9}$/;
		var str=$(this).val();
		if(reg.test(str)){
//			$("#s1").html("合法");
			$("#s1").hide().val("");
			flagName=true;
		}else{
			$("#s1").html("用户名不合法").css("color","red");
			flagName=false;
		}
//		$("#s1,#s2,#s3,#s4,#s5").hide().val("");

	});
	//验证码
	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var nstr=""
	for (var i=1;i<5;i++) {
		nstr+=str.charAt(getRand(0,61));
	}
	$(".ma").html(nstr);
	$(".change_code").click(function(){
		nstr=""
		for (var i=1;i<5;i++) {
			nstr+=str.charAt(getRand(0,61));
		}
		$(".ma").html(nstr);
	});
	var flagCode=null;
	$(".acode").blur(function(){
		$("#s2").show();
		var str=$(this).val();
		var reg=new RegExp($(".ma").html(),"i")
		if(reg.test(str)){
//			$("#s2").html("合法");
			$("#s2").hide().val("");
			flagCode=true;
		}else{
			$("#s2").html("验证码不正确").css("color","red");
			flagCode=false;
		}
//		$("#s1,#s2,#s3,#s4,#s5").hide().val("");
		
	})
	//密码
	var flagPwd=null;
	$(".pwd").blur(function(){
		$("#s4").show();
		var str=$(this).val();
		var reg=/\w+.{5,19}/;
		if (reg.test(str)) {
//			$("#s4").html("合法");
			$("#s4").hide().val("");
			flagPwd=true;
		}else{
			$("#s4").html("密码不合法").css("color","red");
			flagPwd=false;
		}
//		$("#s1,#s2,#s3,#s4,#s5").hide().val("");
	})
	//确认密码
	var flagRpwd=null;
	$(".rpwd").blur(function(){
		$("#s5").show();
		if($(this).val()==$(".pwd").val()){
//			$("#s5").html("合法");
			$("#s5").hide().val("");
			flagRpwd=true;
		}else{
			$("#s5").html("密码不一致").css("color","red");
			flagRpwd=false;
		}
//		$("#s1,#s2,#s3,#s4,#s5").hide().val("");
	})
	
//	$("#s1,#s2,#s3,#s4,#s5").hide();
	//注册成功
	var arr=[];
	$(".reg_btn").click(function(){
//		$("#s1,#s2,#s3,#s4,#s5").show();
		var flag=$(".cb_reg").prop("checked");
		if(flagName&&flagCode&&flagPwd&&flagRpwd&&flag){
			var json={
				"uname":$(".uname").val(),
				"pwd":$(".pwd").val()
			}
			arr.push(json);
			setCookie("info",JSON.stringify(arr));
			location.href="login.html";
		}
	})
	
	function getRand(min,max){
		return Math.round( Math.random()*(max-min) + min );
	}
	
})

