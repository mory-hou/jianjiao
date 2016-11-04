getData();
function  getData(){		
	$("#warp").html("");
	var  length = localStorage.length;
	var  parent = $("#container");
	//找到所要的key
	for(var i = 0;i<length;i++){
		var key = localStorage.key(i);
		if(key.indexOf("goods_")!=-1){ 
			var good = JSON.parse(localStorage.getItem(key));
            var  html = $("<div class='shoplist' data-id="+good["id"]+"><ul class='control'><li><i class='oneshop'></i></li><li><span class='reduce'>-</span><span class='onenum'>"+good["num"]+"</span><span class='add'>+</span></li></ul><dl class='shopinfo'><dt><a href='javascript:void(0)'><img src="+good["img"]+" /></a></dt><dd><div class='shopname'>"+good["name"]+"</div><div class='shopattr'><span class='color'>"+good["color"]+"</span><span class='style'>"+good["name"]+"</span></div><div class='shopmessage'>￥ <span class='price'>"+good["price"]+"</span><span class='shopnum'>"+good["num"]+"</span></div></dd></dl></div>");
           parent.append(html);
		}
	}
}
	$(".del").hide();
	var toggleState = true;
	$(".toggleBtn").on("touchstart",function(){
		$(".oneshop").removeClass("active");
		$(".totalSel").removeClass("active");//默认全不选
		if(toggleState){
		$(this).html("完成");
		$(".jiesuan").hide();
		$(".del").show();
		$(".money").hide();
		toggleState = false;
		}else{
			$(this).html("编辑");
			$(".jiesuan").show();
			$(".del").hide();
			$(".money").show();
			toggleState = true;
			$(".oneshop").addClass("active");
			$(".totalSel").addClass("active");//默认全选
			account();
		}
	});
	//全选
	$(".oneshop").addClass("active");
	$(".totalSel").addClass("active");//默认全选
	account();//初始化数据
	$(".totalSel").on("touchstart",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".oneshop").removeClass("active");
		}else{
			$(this).addClass("active");
			$(".oneshop").addClass("active");
		}
		account();
	});
	//单选
	$(document).on("touchstart",".oneshop",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
		account();
	});
	//删除
	$(".del").on("touchstart",function(){
		$(".oneshop").each(function(index,ele){
			if($(this).hasClass("active")){
				var id = $(this).parents(".shoplist").attr("data-id");
				localStorage.removeItem("goods_"+id);
				$(this).parents(".shoplist").remove();
			}
		})
	});
	//增加商品
	$(document).on("touchstart",".add",function(){
		var num = $(this).prev().html()*1;
		$(this).prev().html(num+1).parents(".shoplist").find(".shopnum").html(num+1);
		account();
		var id = $(this).parents(".shoplist").attr("data-id");
		var goods = JSON.parse(localStorage.getItem("goods_"+id));
		goods["num"]=goods["num"]+1;
		localStorage.setItem("goods_"+id,JSON.stringify(goods));
		
	});
	//减少商品
	$(document).on("touchstart",".reduce",function(){
		var num = $(this).next().html()*1;
		if(num>1){
			$(this).next().html(num-1);
			$(this).next().html(num-1).parents(".shoplist").find(".shopnum").html(num-1);
			var id = $(this).parents(".shoplist").attr("data-id");
			var goods = JSON.parse(localStorage.getItem("goods_"+id));
			goods["num"]=goods["num"]-1;
			localStorage.setItem("goods_"+id,JSON.stringify(goods));
		}
		account();
	});
	$(".jiesuan").on("touchstart",function(){
		var length  = localStorage.length;
		for(var i=0;i<length;i++){
			var key = localStorage.key(i);
			if(key.indexOf("jj_username")!=-1){
				var info = JSON.parse(localStorage.getItem(key));
				location.href = "order.html";
				break;
			}else{
				location.href = "denglu.html";
			}
		}
	})
	
	
	
	//计价
	function account(){
		var $currentNum = 0;
		var $currentPrice = 0;
		var $currentTotal = 0;
		var $allNum = 0;
		var $allPrice = 0;
		$("#container").find(".oneshop").each(function(){
			$currentNum = $(this).parents(".shoplist").find(".onenum").html()*1;
			$currentPrice = $(this).parents(".shoplist").find(".price").html()*1;
			$currentTotal = $currentNum * $currentPrice;
			if($(this).hasClass("active")){
				$allNum +=$currentNum;
				$allPrice += $currentTotal;
			}
		});
		$(".totalPrice").html($allPrice);
	}