//用户名验证
$(function(){
	$("input").focus(function(){
		$(this).css("color","#000")
	})
	//获取cookie 验证用户名 密码
	var flagName=null;
	var flagPwd=null;
	var str=getCookie("info");
	var arr=JSON.parse(str);
	for (let i=0;i<arr.length;i++) {
		$(".uname").blur(function(){
			if(arr[i].uname==$(this).val()){
				flagName=true;
			}else{
				$("#s1").html("用户名不正确").css("color","red");
				flagName=false;
			}
			$("#s1,#s2").hide().val("");
		});
		$(".pwd").blur(function(){
			if(arr[i].pwd==$(this).val()){
				flagPwd=true;
			}else{
				$("#s2").html("密码不正确").css("color","red");
				flagPwd=false;
			}
			$("#s1,#s2").hide().val("");
		})
	}
	$("#s1,#s2").hide();
	$(".login_btn").click(function(){
		
		$("#s1,#s2").show();
		if(flagName&&flagPwd){
			if($(".cb_login").prop("checked")){
				setCookie("info",str,1);
			}
			location.href="index.html";
		}
	})
	
})

