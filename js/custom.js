//点击加减按钮

$(function(){
	$(".span_a").click(function(){
		$(this).addClass("nodehide")
				.parent()
				.siblings()
				.find(".span_a")
				.removeClass("nodehide");
		$(this).parent().find(".list_box").show()
						.end()
						.siblings()
						.find(".list_box").hide()
	})
	//读取json的数据并显示在listright_bottom里 分页
	$.ajax({
		type:"get",
		url:"custom.json",
		async:true,
		success:function(arr){
			var index=1;
			showData(index,arr);
			var total=Math.ceil(arr.length/9);
			$(".M-box").pagination({
				pageCount:total,
				callback:function(api){
					var data = {
			            page: api.getCurrent(), //返回当前页码
			            name: 'mss',
			            say: 'oh'
			        };
			        var index=data.page;
			        $.getJSON("custom.json",function(arr){
			        	showData(index,arr)
			        })
				}
			})
			
		}
	});
	
	function showData(index,arr){
		var str="";
		for(var i=(index-1)*9;i<index*9;i++){
			if(i<arr.length){
				str+=`<div class="wraperitem">
                        <div class="itemimg"><a href="product.html?pid=${arr[i].id}" target="_blank" ><img src="images/custom/${arr[i].src[0]}" title="${arr[i].name}（${arr[i].num}）" alt="${arr[i].name}（${arr[i].num}）"></a></div>
                        <div class="itemname"><a href="product.html?pid=${arr[i].id}" target="_blank" title="${arr[i].name}（DBW134533D）">${arr[i].name}<span>（${arr[i].num}）</span></a></div>
                        <div class="itemprice"> <div class="pricemarket">市场价：<span style="text-decoration:line-through;">￥${arr[i].oprice}</span></div>
                        <div class="pricemember">商城价：<span>￥${arr[i].oprice}</span></div> </div>
                    </div>`
			}
		}
		$(".listright_bottom").html(str);
	}
	
})

