$.getJSON("http://data.applinzi.com/shouye.php?jsoncallback=?",function(data){
	var result = JSON.parse(data);
	var length = result["banner"].length;
	for(var i=0;i<length;i++){
		var html = $("<div class='imgwrap'><a href="+result["banner"][i][0]+"><img src="+result["banner"][i][1]+" /></a></div><div class='listwrap'><p class='title'>"+result["list"][i]["title"]+"</p><p class='content'>"+result["list"][i]["content"]+"</p><div class='item-warp"+i+"'><ul class='list'></ul></div></div>");
		html.insertBefore("#section-middle");
		var itemLength = result["list"][i]["item"].length;
		for(var j=0;j<itemLength;j++){
			var item=$("<li class='item'><a href="+result["list"][i]["item"][j][0]+"><img src="+result["list"][i]["item"][j][1]+" /><p class='item-name'>"+result["list"][i]["item"][j][2]+"</p><p class='item-price'>"+result["list"][i]["item"][j][3]+"</p><i class='iconfont icon-xihuan'></i></a></li>")
			$(".listwrap").find(".list").append(item);
		}
	}
	$.getJSON("http://data.applinzi.com/goodslist.php?jsoncallback=?",function(data){
		var listId = "index";
		var result = JSON.parse(data);
		var liLength = result[listId]["content"].length;
		for(var j=0;j<liLength;j++){
			var li = $("<li><a href="+result[listId]["content"][j][0]+"><div class='Image'><img src="+result[listId]["content"][j][1]+" /></div><p>"+result[listId]["content"][j][2]+"<br><span>"+result[listId]["content"][j][3]+"</span></p><i class='iconfont icon-xihuan'></i></a></li>");
			$("#content").append(li);
		}
	});
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
	$(".icon-gouwuche i").show();
	$(".icon-gouwuche i").html(num1);
}else{
		$(".icon-gouwuche i").hide();
	}
}



























/*var width = window.innerWidth;
$(".wrap").swipe({swipe:function(event,direction,distance,duration,fingerCount){
	var left = $(".list").position().left ;
	if (left>=-640&&left<=80){
		if(direction == "left"){
			$(".list").animate({"left":left-distance},{duration:200,complete:function(){
				var left = $(".list").position().left;
				if(left<-640){
					$(".list").animate({"left":-640},{duration:200});
				}
			}});
		}
		else if (direction == "right"){
			$(".list").animate({"left":left+distance},{duration:200,complete:function(){
				var left = $(".list").position().left;
				if(left>80){
					$(".list").animate({"left":80},{duration:200});
				}
			}});
		}
	}
}});*/

