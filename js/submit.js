$(function(){
	//接收地址栏传过来的值
	var str=location.href;
	var arr=str.split("?")
	arr=arr[1].split("&")
//	console.log(arr)
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i].split("=");
		if(arr[i][0]=="id"){
			var id=arr[i][1];
		}
		if(arr[i][0]=="index"){
			var index=arr[i][1];
		}
		if(arr[i][0]=="count"){
			var count=arr[i][1];
		}
	}
//	console.log(id,index,count)
	//订单号
	$(".order").html("A000"+count)
	
	
	//取出price cookie
	var pricearr=JSON.parse(getCookie("price"))
//	console.log(pricearr)
//	var sum_price=pricearr[0].oprice;//总金额
	var n_price=pricearr[0].nprice//支付金额
//	var yh=parseFloat(sum_price.split("￥")[1])-parseFloat(n_price.split("￥")[1]);
//	console.log(yh)
	$(".sum_price").html(n_price);
//	$(".yh_price").html("￥"+yh.toFixed(2));
	$(".n_price").html(n_price);
	$(".pay_sum").html("支付全款"+n_price);
	
	//点击changepay显示repaytype
	$(".changepay").click(function(){
		$(".repaytype").show();
		$(".payonline").hide();
		$("#orderpay").hide()
		
	})
	
	//把订单号存入cookie 传入到user.html 订单号 下单日期 应付金额
	var d=new Date();
	d=d.toLocaleDateString();
	if(!getCookie("count")){
		var countarr=new Array();
	}else{
		countarr=JSON.parse(getCookie("count"));
	}
	var cjson={
		"count":$(".order").html(),
		"date":d,
		"price":n_price
	}
	countarr.push(cjson)
	setCookie("count",JSON.stringify(countarr));
	
	
	
	
	//获取bank.json
	$.ajax({
		type:"get",
		url:"bank.json",
		async:true,
		success:function(msg){
			var listr="";
			for (var i=0;i<msg.length;i++) {
				if(msg[i].id==id){
					var src=msg[i].src[index];
					console.log(src)
					$(".span_bank").find("img").attr("src","images/bank/"+src)
				}
			}
			for(var j=0;j<msg[1].src.length;j++){
				listr+=`<li>
            			<input name="repaymenttype" type="radio">
            			<img src="images/bank/${msg[1].src[j]}" alt="" />
            		</li>`
			}
//			console.log(listr)
			$(".pay_ul2").html(listr);
		}
	});
	
	
	
	
	
})
