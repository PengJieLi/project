//点击加减按钮

$(function(){
	$(".span_a").click(function(){
		$(this).addClass("nodehide")
				.siblings()
				.removeClass("nodehide");
	})
})

