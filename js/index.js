window.onload=function(){
	//allmenu 导航栏
	$(".allmenu").mouseenter(function(){
		$(".submenu").show();
	})
	
	$(".allmenu").mouseleave(function(){
		$(".submenu").hide();
	})
	//banner
	var timer=null;
	var index=0;
	timer=setInterval(autoplay,3000);
	function autoplay(){
		$("#banner li").eq(index).fadeIn(1000)
						.siblings()
						.fadeOut(1000);
		$("#banner ol li a").eq(index-1).addClass("active")
							.parent()
							.siblings()
							.find("a")
							.removeClass("active")
		index++;
		if(index==2){
			index=0;
		}
	}
	$("#banner ol li a").click(function(){
		clearInterval(timer);
		$(this).addClass("active")
				.parent()
				.siblings()
				.find("a")
				.removeClass("active");
		var index=$(this).parent().index();
		if(index==1){
			index=0
		}else{
			index=1
		}
		$("#banner li").eq(index).fadeIn(1000)
						.siblings()
						.fadeOut(1000);
		
	})
	//message 选项卡
	$("#message ul li").mouseenter(function(){
		var index=$(this).index();
		$(this).find("a").addClass("select")
						.end()
						.siblings()
						.find("a")
						.removeClass("select");
		$(".messagebottom").children("div").eq(index).show()
								.siblings()
								.hide()
		$(".showimg div").eq(index).removeClass("hide")
									.addClass("show")
									.siblings()
									.removeClass("show")
									.addClass("hide")
	});
	//点击按钮变色
	$(".selectitem:first div").click(function(){
		var index=$(this).index();
		var length=$(".selectitem:first div").size();
		for (var i=0;i<length;i++) {
			if(i==index){
				$(this).find("img").attr("src","images/"+(index+1)+"_"+(index+1)+".png")
			}else{
				$(".selectitem:first div").eq(i).find("img").attr("src","images/"+(i+1)+".png")
			}
		}
		
	});
	$(".selectitem").eq(1).find("div").click(function(){
		var index=$(this).index();
		var length=$(".selectitem").eq(1).find("div").size();
		for (var i=0;i<length;i++) {
			if(i==index){
				$(this).find("img").attr("src","images/polish/"+(index+1)+"_"+(index+1)+".png")
			}else{
				$(".selectitem").eq(1).find("div").eq(i).find("img").attr("src","images/polish/"+(i+1)+".png")
			}
		}
	});
	$(".selectitem:last div").click(function(){
		var index=$(this).index();
		var length=$(".selectitem:last div").size();
		for (var i=0;i<length;i++) {
			if(i==index){
				$(this).find("img").attr("src","images/clarity/"+(index+1)+"_"+(index+1)+".png")
			}else{
				$(".selectitem:last div").eq(i).find("img").attr("src","images/clarity/"+(i+1)+".png")
			}
		}
		
	});
	
	//rightbar
	$("#rightbar a").mouseenter(function(){
		$(this).find("li").css("opacity","0.9")
				.end()
				.siblings()
				.find("li")
				.css("opacity","1");
//	alert($(this).position().top)
		if($(this).index()==4){
			$(".twocode").show().css({
				"position":"absolute",
				"right":70,
				"top":-45,
				"zIndex":999
			})
		}else{
			$(".twocode").hide()
			
		}
	});
	$("#rightbar a").mouseleave(function(){
		$("#rightbar a li").css("opacity","1");
		$(".twocode").hide()
	})
	//返回顶部
	$("#rightbar a:last").click(function(){
		$("html,body").scroll(0)
	});
	
	$(".keycode").focus(function(){
		$(this).val("");
	})
	$(".keycode").blur(function(){
		if($(this).val()){
			$(this).val($(this).val());
		}else{
			$(this).val("请输入型号或者名称");
		}
	})
	//登录检测
	if(!getCookie("info")){
		return ;
	}
	var hstr=getCookie("info");
	var arr=JSON.parse(hstr);
	if(arr.length!=0){
		$(".span_name").html(arr[0].uname+"，欢迎光临戴欧妮珠宝网！");
		$(".a_login").hide();
		$(".a_reg").hide();
		$(".span_name").after("<a class='a_exit' href='#' style='margin-right:15px'>退出</a>");
		
	}
	$(".a_exit").click(function(){
		$(".a_login").show();
		$(".a_reg").show();
		$(this).hide();
		$(".span_name").html("您好，欢迎光临戴欧妮珠宝网！");
	})
	
}
