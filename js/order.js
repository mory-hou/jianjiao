	var  length = localStorage.length;
	for(var i = 0;i<length;i++){
		var key = localStorage.key(i);
		if(key.indexOf("address_t_")!=-1){
			var address = JSON.parse(localStorage.getItem(key));
			$(".filladdr2 .username").html(address["username"]);
			$(".filladdr2 .userphone").html(address["userphone"]);
			$(".filladdr2 .useraddr").html(address["useraddr"]);
			$(".filladdr2 .detailaddr").html(address["detailaddr"]);
			$(".filladdr2").show(); 
			$(".filladdr").hide();
			break;
		}else{
			$(".filladdr").show(); 
			$(".filladdr2").hide();
		}
	}
	
	$(document).on("touchstart", ".filladdr2", function() {
		location.href = "onestep.html";
	})

getData();
function  getData(){
	var  length = localStorage.length;
	for(var i = 0;i<length;i++){
		var key = localStorage.key(i);
		if(key.indexOf("goods_")!=-1){ 
			var good = JSON.parse(localStorage.getItem(key));
            var  html = $("<dl class='shopinfo'><dt><a href='javascript:void(0)'><img src="+good["img"]+"/></a></dt><dd><div class='shopname'>"+good["name"]+"</div><div class='shopattr'><span class='color'>"+good["color"]+"</span><span class='style'>"+good["name"]+"</span></div><div class='shopmessage'>￥ <span class='price'>"+good["price"]+"</span><span class='shopnum'>"+good["num"]+"</span></div></dd></dl>");
           html.insertBefore(".shopaccount");
           var totalNum =parseInt($(".shopaccount span").eq(0).html())+good["num"];
           $(".shopaccount span").eq(0).html(totalNum);
           var totalPrice =parseInt($(".shopaccount span").eq(1).html())+good["num"]*good["price"];
           $(".shopaccount span").eq(1).html(totalPrice);
		}
	}
}

totalPrice();
function totalPrice(){
	var totalPrice = $(".shopaccount span").eq(1).html()-$(".coupon i").html()+$(".freight i").html();
	$(".totalPrice").html(totalPrice);
}
