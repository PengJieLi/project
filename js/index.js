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
	timer=setInterval(function(){
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
	},3000);
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
}
