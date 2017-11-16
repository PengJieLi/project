$(function(){
	//ajax json 获取luozuan.json里的数据显示到界面
	$.ajax({
		type:"get",
		url:"luozuan.json",
		async:true,
		success:function(msg){
			var arr=msg.list;
			var str="";
			
			for(var i=0;i<arr.length;i++){
				str+=`<div class="listitem" id="listwrap_216306177">
						<div class="itembox">
							<img src="images/luozuan/${arr[i].shape}" alt="圆形">
						</div>
						<div class="giaitemtext">${arr[i].weight}</div>
						<div class="giaitemtext">${arr[i].jingdu}</div>
						<div class="giaitemtext">${arr[i].yanse}</div>
						<div class="giaitemtext">${arr[i].qiegong}</div>
						<div class="giaitemtext">${arr[i].paoguang}</div>
						<div class="giaitemtext">${arr[i].duichen}</div>
						<div class="giaitemtext">${arr[i].yingguang}</div>
						<div class="itemtext">${arr[i].zhengshu}</div>
						<div class="itemtext" style="width:70px;cursor:pointer;">
							<a href="/diamond/diamondshow.aspx?id=2267427042" target="_blank">${arr[i].zhengshuhao}</a>
						</div>
						<div class="itemgray">￥${arr[i].shichangjia}</div>
						<div class="itemprice">￥${arr[i].shangchengjia}</div>
						<div class="itemtext">联系客服</div>
						<div class="itemorder">
							<a href="/diamond/diamondshow.aspx?id=2267427042" target="_blank">
								<img src="images/luozuan/buy.jpg" border="0">
							</a>
						</div>
					</div>`;
					
			}
			$("#diamondlist_item").append(str);
			//搜索
			$("#search").click(function(){
				var zflag=null;
				var xflag=null;
				var nstr="";
				//搜索匹配
				var sweight=parseFloat($(".sweight").val()) ;
				var bweight=parseFloat($(".bweight").val()) ;
				var zsh=$(".zsh").val();
				for(var i=0;i<arr.length;i++){
					//如果证件号为空， 不进行匹配
					if(zsh==""){
						zflag=true;
					}else{
						zflag=(zsh==arr[i].zhengshuhao);
					}
					if($(".ss")){
						xflag=($(".ss").html()==arr[i].xingzhuang)
					}else{
						xflag=true;
					}
					
					
					
					if(sweight<arr[i].weight&&bweight>arr[i].weight&&zflag&&xflag){
						nstr+=`<div class="listitem" id="listwrap_216306177">
							<div class="itembox">
								<img src="images/luozuan/${arr[i].shape}" alt="圆形">
							</div>
							<div class="giaitemtext">${arr[i].weight}</div>
							<div class="giaitemtext">${arr[i].jingdu}</div>
							<div class="giaitemtext">${arr[i].yanse}</div>
							<div class="giaitemtext">${arr[i].qiegong}</div>
							<div class="giaitemtext">${arr[i].paoguang}</div>
							<div class="giaitemtext">${arr[i].duichen}</div>
							<div class="giaitemtext">${arr[i].yingguang}</div>
							<div class="itemtext">${arr[i].zhengshu}</div>
							<div class="itemtext" style="width:70px;cursor:pointer;">
								<a href="/diamond/diamondshow.aspx?id=2267427042" target="_blank">${arr[i].zhengshuhao}</a>
							</div>
							<div class="itemgray">￥${arr[i].shichangjia}</div>
							<div class="itemprice">￥${arr[i].shangchengjia}</div>
							<div class="itemtext">联系客服</div>
							<div class="itemorder">
								<a href="/diamond/diamondshow.aspx?id=2267427042" target="_blank">
									<img src="images/luozuan/buy.jpg" border="0">
								</a>
							</div>
						</div>`;
					}
				}
				$("#diamondlist_item").html("")
				if(nstr==""){
					nstr="没有商品"
				}
				$("#diamondlist_item").append(nstr);
				
			})
		}
	});
	//点击某个div 高亮显示
	$(".w070").click(function(){
		$(this).css({
			"color":"red",
			"font-weight":"900"
		});
	});
	$(".diaimgs").click(function(){
		var index=$(this).index();
		for(var i=0;i<$(".diaimgs").size();i++){
			if(index==i){
				$(this).find("img").attr("src","images/luozuan/"+(i+1)+"_"+(i+1)+".png")
						.end()
						.find(".spantxt")
						.css("color","red")
						.addClass("ss")
			}else{
				$(".diaimgs").eq(i).find("img").attr("src","images/luozuan/"+(i+1)+".png")
									.end()
									.find(".spantxt")
									.css("color","")
									.removeClass("ss")
			}
		}
	});

	//重置
	$("#reset").click(function(){
		location.href="luozuan.html";
	})
	
})
