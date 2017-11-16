$(function(){
	$(":text").focus(function(){
		$(this).css("color","#000")
	})
	if(!getCookie("info")){
		return ;
	}
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
		$("#i1").show()
		if(narr[0].uname==$(this).val()){
			flagName=true;
			$("#i1").hide().val("");
		}else{
			flagName=false;
			$("#i1").html("用户名不正确").css("color","red");
		}
		

	});
	
	//密码
	var flagPwd=null;
	$(".cpwd").blur(function(){
		$("#i3").show();
		var str=$(this).val();
		var reg=/\w+.{5,19}/;
		if (reg.test(str)) {
			$("#i3").hide().val("");
			flagPwd=true;
		}else{
			$("#i3").html("密码不合法").css("color","red");
			flagPwd=false;
		}
//		$("#i1,#i2,#i3,#i4").hide().val("");
	})
	//确认密码
	var flagRpwd=null;
	$(".qpwd").blur(function(){
		$("#i4").show();
		if($(this).val()==$(".cpwd").val()){
			$("#i4").hide().val("");
			flagRpwd=true;
		}else{
			$("#i4").html("密码不一致").css("color","red");
			flagRpwd=false;
		}
	})
	
	//注册成功
	var arr=[];
	$(".forgetsubmit").click(function(){
		
		if(flagName&&flagPwd&&flagRpwd){
			var json={
				"uname":$(".iphone").val(),
				"pwd":$(".cpwd").val()
			}
			arr.push(json);
			setCookie("info",JSON.stringify(arr));
			$(".forget_top").hide();
			$(".success").show();
		}
	})
	//立即购物
	$(".shop").click(function(){
		location.href="index.html";
	})
	
	
	function getRand(min,max){
		return Math.round( Math.random()*(max-min) + min );
	}
	
})

