$(function(){
	//验证
	//提示框动画效果 点击提交保存按钮
	$("#submitbutton").click(function(){
		var flag_wx=null;
		var flag_sj=null;
		var str=$("#weixin").val();
		var reg=/^[a-zA-Z][\w/-]{5,19}$/;
		if(reg.test(str)||str==""){
			flag_wx=true;
		}else{
			flag_wx=false;
		}
		
		var nstr=$("#mobile").val();
		var nreg=/^1[5738]\d{9}$/;
		
		if(nreg.test(nstr)||nstr==""){
			flag_sj=true;
		}else{
			flag_sj=false;
		}
//		console.log(flag_sj,flag_wx)
		//用户名
		var flag_xm=null;
		var xstr=$("#realname").val();
		var xreg=/^\w{5,10}$/;
		if(xreg.test(xstr)){
			flag_xm=true;
		}else{
			flag_xm=false;
		}
		//邮箱验证
		var falg_email=null;
		var mstr=$("#email").val();
		var mreg=/^\w+@\w+\.\w+$/;
		if(mreg.test(mstr)||mstr==""){
			falg_email=true;
		}else{
			falg_email=false;
		}

		$(".mask").show();
		$(".update").show().css({
			"position": "fixed",
		    "left": 0,
		    "top": 0,
		    "right": 0,
		    "bottom": 0,
		    "margin": "auto"
		});
		if(!flag_xm||!flag_wx||!flag_sj||!falg_email){
			if(!flag_xm){
				$(".up_hint").html("用户名不合法（5-10位，字母数字下划线）");
			}
			if(!flag_wx){
				$(".up_hint").html("请输入正确的微信");
			}
			if(!flag_sj){
				$(".up_hint").html("请输入正确的手机号");
			}
			if(!falg_email){
				$(".up_hint").html("邮箱格式不正确");
			}
		}else{
			$(".up_hint").html("修改成功");
			//获取注册信息
			var infostr=getCookie("info");
			var infoarr=JSON.parse(infostr);
			var sex=$(":radio:checked").val();
			var y=$("#year :selected").val();
			var m=$("#month :selected").val();
			var d=$("#day :selected").val();
			var qq=$("#qq").val();
			var wx=$("#weixin").val();
			var sj=$("#mobile").val();
			var email=$("#email").val();
			
			var infojson={
				"uname":infoarr[0].uname,
				"pwd":infoarr[0].pwd,
				"relname":$("#realname").val(),
				"sex":sex,
				"year":y,
				"month":m,
				"day":d,
				"QQ":qq,
				"weixin":wx,
				"mobile":sj,
				"email":email
			}
			infoarr=[];
			infoarr.push(infojson);
			setCookie("info",JSON.stringify(infoarr))
			console.log(infoarr)
			/*setTimeout(function(){
				location.href="user.html";
			},1000)*/
		}
	});
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
	//获取新的info信息显示在相应位置
	
	var ninfoarr=JSON.parse(getCookie("info"));
	if(ninfoarr.length!=2){
		var a=ninfoarr[0];
		$("#realname").val(a.relname);//姓名
		$(":radio").each(function(index){ //性别
			if($(this).val()==a.sex){
				$(this).attr("checked",true)
			}
		});
		$("#year option").each(function(index){//年
			if($(this).val()==a.year){
				$(this).attr("selected",true)
			}
		})
		$("#month option").each(function(index){//月
			if($(this).val()==a.month){
				$(this).attr("selected",true)
			}
		})
		$("#day option").each(function(index){//日
			if($(this).val()==a.day){
				$(this).attr("selected",true)
			}
		})
		$("#qq").val(a.QQ);//qq
		$("#weixin").val(a.weixin)//微信
		$("#mobile").val(a.mobile)//手机
		$("#email").val(a.email)//邮箱
	}
})
