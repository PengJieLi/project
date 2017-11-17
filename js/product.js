

//请求ajax将数据显示到item_left 
$(function(){
	var str=location.href;//http://127.0.0.1:8020/WWW/project/product.html?pid=1
	var arr=str.split("?");
	var brr=arr[1].split("=");
//	console.log(brr[1]);
	$.ajax({
		type:"get",
		url:"custom.json",
		async:true,
		success:function(msg){
//			console.log(msg)
			var listr="";
			var imgstr="";
			for(var i=0;i<msg.length;i++){
				if(brr[1]==msg[i].id){
//					console.log(msg[i].src[0])
					$(".large").find("img").attr("src","images/custom/"+msg[i].src[0]);
					$(".big_box").css("background-image","url(images/custom/"+msg[i].src[0]+")");
//					$(".large").html("<img src='images/custom/"+msg[i].src[0]+"' alt='' >")
					for(var j=0;j<msg[i].src.length;j++){
						listr+=`<li><img src="images/custom/${msg[i].src[j]}" alt="" /></li>`;
						imgstr+=`<img src="images/custom/${msg[i].src[j]}" alt="" />`;
					}
					$(".bold").html(msg[i].name+"-"+msg[i].num);
					$("#itemmarket").html(msg[i].oprice);
					$("#itemprice").html(msg[i].nprice);
				}
				
			}
			$("#imglist").html(listr);//ul 里的图片
			$(".product_img").html(imgstr);
		}
	});
	
	//点击小图换中图 划过 加边框  
	//点击加上class（aa） 移入时有aa 不变  没有变成-92 
	//移出时有aa不变 没有变0
	$("#imglist").on("mouseenter","li",function(){
		if($(this).attr("class")=="aa"){
			$(this).css("background-position-x","-184px")
		}else{
			$(this).css("background-position-x","-92px")
		}
	
	})
	$("#imglist").on("mouseleave","li",function(){
		if($(this).attr("class")=="aa"){
			$(this).css("background-position-x","-184px")
		}else{
			$(this).css("background-position-x","0")
		}
	})
	$("#imglist").on("click","li",function(){
		$(this).css("background-position-x","-184px")
				.addClass("aa")
				.siblings()
				.css("background-position-x","")
				.removeClass("aa");
		//点击小图换中图
		var imgsrc=$(this).find("img").attr("src")
		$(".large").find("img").attr("src",imgsrc);
		$(".big_box").css("background-image","url("+imgsrc+")");
//		console.log($(".big_box").css("background-image"))
	})
	//点击变色materia
	$(".materia").click(function(){
		$(this).addClass("materiaselect")
				.siblings()
				.removeClass("materiaselect")
		
	});
	//放大镜效果    小图移走的距离*大盒子宽高/小图宽高
	$(".large").mouseenter(function(){
		$(".mask").show();
		$(".big_box").show();
		$(document).mousemove(function(e){
			var e=e||event;
			var mx=$(".mask").width();
			var my=$(".mask").height();
			var bx=$(".large").width();
			var by=$(".large").height();
			var maxL=bx-mx;
			var maxT=by-my;
			var x=e.pageX-$(".large").offset().left-mx/2;
			var y=e.pageY-$(".large").offset().top-my/2;
			x=Math.min(maxL,Math.max(0,x));
			y=Math.min(maxT,Math.max(0,y));
			$(".mask").css({
				"left":x,
				"top":y		
			});
			$(".big_box").css({
				"background-position-x":-x*bx/mx,
				"background-position-y":-y*by/my
			})
		})
	})
	//移走
	$(".large").mouseleave(function(){
			$(".mask").hide();
			$(".big_box").hide();
	})
	
	//吸顶
	$(window).scroll(function(){
		 t=$(".productcont").offset().top;
		if($("body,html").scrollTop()>=t){
			$("#producthead").css({
				"position":"fixed",
				"top":0
			})
		}else{
			$("#producthead").css("position","static")
		}
//		
	})
	//点击到达指定位置
	$(".headnormal").click(function(){
		$("body,html").scrollTop(t);
	})
	//点击按钮addtocart_zuan 加入珠宝箱
	var narr=[];
	var index=0;
	$(".addtocart_zuan").click(function(){
		var cz=$(".materiaselect").html();
		var weight=$("#selectzweight option:selected").text();
		var sc=$("#ringsize option:selected").text();
		var kz=$("#carveword").val();
		var id=parseInt(brr[1]);
		var json={
			"id":id,
			"caizhi":cz,
			"weight":weight,
			"shoucun":sc,
			"kezi":kz,
			"count":narr.length+1,
			"index":index++
		}
		narr.push(json);
		setCookie("product",JSON.stringify(narr));
	})
})

