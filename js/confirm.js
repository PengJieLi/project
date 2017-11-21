$(function() {
	if(!getCookie("product")) {
		return;
	}
	var nstr = getCookie("product");
	var arr = JSON.parse(nstr);
	var str = "";
	$.ajax({
		type: "get",
		url: "custom.json",
		async: true,
		success: function(msg) {
			for(var j = 0; j < msg.length; j++) {
				for(var i = 0; i < arr.length; i++) {
					if(arr[i].id == msg[j].id) {
						var dif = (msg[j].oprice - msg[j].nprice).toFixed(2);
						str += `<tr class="product" style="background:#fff">
				                    <td class="img"><img width="120" height="120" src="images/custom/${msg[j].src[0]}" alt=""></td>
				                    <td><a href="#" target="_blank">${msg[j].name}，材质：${arr[i].caizhi}，镶口：${arr[i].weight} ${msg[j].num}</a></td>
				                    <td class="size">${arr[i].shoucun}</td>
				                    <td class="word">&nbsp;</td>
				                    <td class="price oprice" style="text-decoration:line-through;">${msg[j].oprice}</td>
				                    <td class="price cprice">${dif}</td>
				                    <td class="price nprice">${msg[j].nprice}</td>
					           </tr>`
					}
				}

			}
			$("#table").append(str);
			var count = arr.length;
			$("#count").html(count); //数量

			var osum = 0; //总市场价
			var nsum = 0; //总金额
			$(".oprice").each(function(index) {
				osum += parseFloat($(".oprice").eq(index).html());
			})
			$(".nprice").each(function(index) {
				nsum += parseFloat($(".nprice").eq(index).html());
			})
			$("#productmoney").html("￥" + osum.toFixed(2)); //总价
			$("#totalmoney").html("￥" + nsum.toFixed(2)); //应付
			$("#discountmoney").html("￥" + (osum.toFixed(2) - nsum.toFixed(2)).toFixed(2)); //优惠
			$("#totalpayment").html(nsum.toFixed(2)); //应付金额
			//存入总价格 和应支付价格
			var pricearr=[];
			var price={
				"oprice":$("#productmoney").html(),
				"nprice":$("#totalmoney").html()
			}
			pricearr.push(price)
			
//			console.log(price)
			//提交订单
			//选择支付方式 
			$(".submit_btn").click(function(){
				var flag1=null;
				var flag2=null;

				$(".pay_type1 :radio").each(function(index){
					if($(".pay_type1 :radio").eq(index).prop("checked")){
						var index=$(".pay_type1  :radio:checked").parent().index();
						var count=getRand(0,1000);
						setCookie("price",JSON.stringify(pricearr));
						location.href="submit.html?id=1&index="+index+"&count="+count;
						return ;
					}
				})
				$(".pay_type2 :radio").each(function(index){
					if($(".pay_type2 :radio").eq(index).prop("checked")){
						var index=$(".pay_type2  :radio:checked").parent().index();
						var count=getRand(0,1000);
						setCookie("price",JSON.stringify(pricearr));
						location.href="submit.html?id=2&index="+index+"&count="+count;
						return ;
					}
				})
			})
			//随机数
			function getRand(min,max){
				return Math.round(Math.random()*(max-min)+min);
			}
		}
	});
	
})
//三级联动
var Gid = document.getElementById;
var showArea = function() {
	Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" +
		Gid('s_city').value + " - 县/区" +
		Gid('s_county').value + "</h3>"
}
Gid('s_county').setAttribute('onchange', 'showArea()');