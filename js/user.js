$(function(){
	//最近收藏 左右箭头
	//左
	$("#sleft").click(function(){
		$(".s_ul").css("left","-182px");
		$(".s_ul li:last").prependTo(".s_ul");
		$(".s_ul").stop().animate({
			"left":"0"
		},500)
	})
	//右
	$("#sright").click(function(){
		$(".s_ul").stop().animate({
			"left":"-182px"
		},500,function(){
			$(".s_ul").css("left",0);
			$(".s_ul li:first").appendTo(".s_ul");
		})
	})
	//热门推荐左右箭头
	//左
	$("#bleft").click(function(){
		$(".b_ul").css("left","-200px");
		$(".b_ul li:last").prependTo(".b_ul");
		$(".b_ul").stop().animate({
			"left":"0"
		},500)
	})
	//右
	$("#bright").click(function(){
		$(".b_ul").stop().animate({
			"left":"-200px"
		},500,function(){
			$(".b_ul").css("left",0);
			$(".b_ul li:first").appendTo(".b_ul");
		})
	})
})
