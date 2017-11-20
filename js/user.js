$(function(){
	//信息获取
	if(!getCookie("info")){
		return ;
	}
	var infostr=getCookie("info");
	var infoarr=JSON.parse(infostr);
	$(".b_uname").html(infoarr[0].uname)
	if(!getCookie("product")){
		$("#userhomecartnumber").html(0)
//		console.log(1)
	}else{
		var str=getCookie("product");
		var arr=JSON.parse(str);
		console.log(arr.length)
		$("#userhomecartnumber").html(arr.length)
	}
	
	
	
	
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
	//获取collect cookie 显示到最近收藏s_ul 里
	/*<li>
			<a href="#"><img src="images/custom/3.jpg" alt="" /></a>
			<div class="itemname">爱之光</div>
		</li>*/
	var collectarr=JSON.parse(getCookie("collect"));
	var collectstr="";
	for (var i=0;i<collectarr.length;i++) {
		collectstr+=`<li>
						<a href="#"><img src="images/custom/${collectarr[i].src}" alt="" /></a>
						<div class="itemname">${collectarr[i].name}</div>
					</li>`
	}
	console.log(collectarr)
	
	$(".s_ul").html(collectstr);
	
})
