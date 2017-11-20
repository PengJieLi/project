$(function(){
	//原始密码opwd   新设密码 npwd 确认密码 rpwd
	//获取初始密码
	var arr=JSON.parse(getCookie("info"));
	var opwd=arr[0].pwd;
//	console.log(arr)
	
	$("#submitbutton").click(function(){
		$(".mask").show();
		$(".update").show().css({
			"position": "fixed",
		    "left": 0,
		    "top": 0,
		    "right": 0,
		    "bottom": 0,
		    "margin": "auto"
		});
		

		//如果原始密码相同 进行新设密码
		if($("#opwd").val()==opwd){
			var str=$("#npwd").val();
			var reg=/\w+.{5,19}/;
			//新设密码验证
			if(reg.test(str)){
				if(str==$("#rpwd").val()){
					$(".up_hint").html("提交成功");
					//存入到cookie中
					arr[0].pwd=$("#npwd").val();
					setCookie("info",JSON.stringify(arr));
					$("#opwd").val("");
					$("#npwd").val("");
					$("#rpwd").val("");
				}else{
					$(".up_hint").html("两次密码不一样");
				}
			}else{
				$(".up_hint").html("新设密码不符合格式（6-20位必须包含数字和字母）");
			}
		
		}else{
			$(".up_hint").html("原始密码不正确");
		}
		
	})
	$(window).resize(function(){
		var w=parseInt($(window).outerWidth());
		var h=parseInt($(window).outerHeight());
		$(".update").stop().animate({
			"left":w/2,
			"top":h/2,
			"margin-left":"-200px",
			"margin-top":"-121px"
		},500)
	});
	//点击up_close关闭
	$(".up_close").click(function(){
		$(".mask").hide();
		$(".update").animate({
			"margin-top":"-300px"
		},200,function(){
			$(".update").hide()
		});
	});
	//确定按钮
	$(".up_btn").click(function(){
		$(".mask").hide();
		$(".update").animate({
			"margin-top":"-300px"
		},200,function(){
			$(".update").hide()
		});
	});
})
