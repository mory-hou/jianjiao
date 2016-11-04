$.getJSON("http://data.applinzi.com/details.php?jsoncallback=?",function(data){
	var goodsId = location.href.split("?")[1].split("=")[1];
	var result = JSON.parse(data);
	var length = result[goodsId]["tabImg"].length;
	for(var i=0;i<length;i++){
		var li = $("<li class='swiper-slide slide"+(i+1)+"'><img src="+result[goodsId]["tabImg"][i]+" alt='图片加载失败' /></li>");
		$("#swiper-wrapper").append(li);
	}
	var html = $("<p>"+result[goodsId]["name"]+"<br><span>"+result[goodsId]["price"]+"</span></p>");
	html.insertBefore("#min-nav");
	var html = $("<dd><img src="+result[goodsId]["tabImg"][0]+" /></dd><dt>大笨钟原创水晶版画<p id='price'>1050.00</p></dt>");
	html.insertBefore("#close");
	var length = result[goodsId]["color"].length;
	for(var i=0;i<length;i++){
		var color = $("<a class='color'>"+result[goodsId]["color"][i]+"</a>");
		$("#buies li").eq(0).append(color);
	}
	var name = $("<a class ='name'>"+result[goodsId]["price"]+"</a>")
	$("#buies li").eq(1).append(name);
	
	$(".color").on("touchend",function(){
		$(".color").removeClass("active")
		$(this).addClass("active");
		$("#showder-footer").html("确定");
	})
	$(".name").on("touchend",function(){
		$(".name").removeClass("active")
		$(this).addClass("active");
		$("#showder-footer").html("确定");
	})
	
	/*swiper*/
	var myswiper = new Swiper("#swiper",{
		autoplay: 1000,//可选选项，自动滑动
		speed:2000,
		loop:true,
		direction:"horizontal",
		autoplayDisableOnInteraction:false,
		pagination : '.swiper-pagination',
		paginationClickable :true,
	});
	
});

/*点击显示 隐藏*/
  $(".hd3").each(function(){
	$(this).next().next().hide();
	$(this).on("touchstart",function(){
		if($(this).attr("dataflag")=="true"){
			$(this).next().next().show();
			$(this).attr({"dataflag":"false"});
			myScroll1.refresh();
		}
		else{
			$(this).next().next().hide();
			$(this).attr({"dataflag":"true"});
			myScroll1.refresh();
		}
   });
}); 
/*立即购买 加入购物车*/
$("#car,#buy").on("touchstart",function(){
	$("#showder").show();
});
/*关闭*/
$("#close").on("touchstart",function(){
	$("#showder").hide();
	$(".number").val(1);
});
/*减号*/
$(".reduce").on("touchstart",function(){
	var $num=$(".number").val()*1;
	if($num==1){
		$(".number").val($num);
	}else{
		$num-=1;
		$(".number").val($num);
	}
});
/*加号*/
$(".add").on("touchstart",function(){
	var $num=$(".number").val()*1;
	$num+=1;
	$(".number").val($num);
});

$("#showder-footer").on("touchend",function(){
	var id = $("#buy-showder").attr("data-id");
	var img = $("#descript").find("img").attr("src");
	var price  = parseInt($("#price").html());
	var color = null;
	$(".color").each(function(){
		if($(this).hasClass("active")){
			color = $(this).html();
		}
	})
	var name = null;
	$(".name").each(function(){
		if($(this).hasClass("active")){
			name = $(this).html();
		}
	})
	if(!color){
		$("#showder-footer").html("请选择颜色");
	}else if(!name){
		$("#showder-footer").html("请选择规格");
	}else if(color&&name){
		var num = parseInt($(".number").val());
		var goods =JSON.parse(localStorage.getItem("goods_"+id));
		if(goods!=null){ 
			num += parseInt(goods["num"]);
		}
		var  list ={"id":id,"img":img,"price":price,"color":color,"name":name,"num":num};
		localStorage.setItem("goods_"+id,JSON.stringify(list));
		var img = $("#descript img");
		var flyImg = img.clone().css("opacity", 0.75);
		$("body").append(flyImg);
		flyImg.css({"z-index": 100,"display": "block","position": "absolute","top": img.offset().top +"px","left": img.offset().left +"px","width": img.width() +"px","height": img.height() +"px"});
		flyImg.animate({top: $(".icon-gouwuche1").offset().top+$(".icon-gouwuche1").width()/2,left: $(".icon-gouwuche1").offset().left+$(".icon-gouwuche1").height()/2,width: 0,height: 0}, "slow", function() {
			flyImg.remove();
		});
		anum();
	}
});

anum();
function anum(){
	var length = localStorage.length;
	var num1 = 0;
	for(var i=0;i<length;i++){
		var akey = localStorage.key(i);
		if(akey.indexOf("goods_")!=-1){
			var info = JSON.parse(localStorage.getItem(akey));
			num1 += parseInt(info["num"]) 
		}
	}
	if(num1!=0){
		$(".icon-gouwuche1 i").show();
		$(".icon-gouwuche1 i").html(num1);
	}else{
		$(".icon-gouwuche1 i").hide();
	}
}
