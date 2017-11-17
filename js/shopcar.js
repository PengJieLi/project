//获取cookie


$(function(){
	if(!getCookie("product")){
		return ;
	}
	var nstr=getCookie("product");
	var arr=JSON.parse(nstr);
	var str="";
	$.ajax({
		type:"get",
		url:"custom.json",
		async:true,
		success:function(msg){
		/*	console.log(msg)
			console.log(arr)*/
			for(var j=0;j<msg.length;j++){
				for(var i=0;i<arr.length;i++){
					if(arr[i].id==msg[j].id){
						var dif=(msg[j].oprice-msg[j].nprice).toFixed(2);
						str+=`<tr class="product">
				                    <td class="img"><img width="120" height="120" src="images/custom/${msg[j].src[0]}" alt=""></td>
				                    <td><a href="#" target="_blank">${msg[j].name}，材质：${arr[i].caizhi}，镶口：${arr[i].weight} ${msg[j].num}</a></td>
				                    <td class="size">${arr[i].shoucun}</td>
				                    <td class="word">&nbsp;</td>
				                    <td class="price oprice" style="text-decoration:line-through;">${msg[j].oprice}</td>
				                    <td class="price cprice">${dif}</td>
				                    <td class="price nprice">${msg[j].nprice}</td>
				                    <td class="action"><div><a href="javascript:;" class="del" cc="${arr[i].index}" >删除</a><br><a href="javascript:;" class="upt">修改</a></div></td>
					           </tr>`;
					}
				}
				
			}
			$("#table").append(str);
			var count=arr.length;
			$("#count").html(count);//数量
			
			var osum=0;//总市场价
			var nsum=0;//总金额
			$(".oprice").each(function(index){
				osum+= parseFloat($(".oprice").eq(index).html()) ;
			})
			$(".nprice").each(function(index){
				nsum+= parseFloat($(".nprice").eq(index).html()) ;
			})
			$("#productmoney").html("￥"+osum.toFixed(2))
			$("#totalmoney").html("￥"+nsum.toFixed(2));
			$("#discountmoney").html("￥"+(osum.toFixed(2)-nsum.toFixed(2)).toFixed(2))
			//提示框显示隐藏
			var flag=null;
			$(".clear").click(function(){
				$(".full").show();
				$(".prompt").show();
				flag=false;
			});
			$(".close").click(function(){
				$(".full").hide();
				$(".prompt").hide();
			});
			//点击删除
			var index1=0;
			$(".del").click(function(){
				$(".full").show();
				$(".prompt").show();
				flag=true;
				index1=$(this).parent().parent().parent().index();
			});
			
			
			//点击确定清空    取消返回
			
		
			$(".btn_y").click(function(){
				if(flag){
					var id=$(".del").eq(index1-1).attr("cc")
					$(".del").eq(index1-1).parent().parent().parent().remove();
					var new_arr=arr;
					for(var i=0;i<new_arr.length;i++){
						if(new_arr[i].index==id){
							new_arr.splice(i,1);
						}
					}
					setCookie("product",JSON.stringify(new_arr) );
					$(".full").hide();
					$(".prompt").hide();
					location.reload();
				}else{
					$(".product").remove();
					$("#count").html(0);
					var resetstr="";
					setCookie("product",resetstr);
					$(".full").hide();
					$(".prompt").hide();
				}
				
			
			});
			$(".btn_n").click(function(){
				$(".full").hide();
				$(".prompt").animate({
					"top":50
				},100,function(){
					$(this).hide();
				});
			});
			
		}
	});
})
