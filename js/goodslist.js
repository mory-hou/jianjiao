$.getJSON("http://data.applinzi.com/goodslist.php?jsoncallback=?",function(data){
	var listId = location.href.split("?")[1].split("=")[1];
	var result = JSON.parse(data);
	var imgLength = result[listId]["bannerImg"].length;
	for(var i=0;i<imgLength;i++){
		var img = $("<img src="+result[listId]["bannerImg"][i]+" />");
		$("#header-1").append(img);
	}
	$("#section-header h2").html(result[listId]["title"]);
	$("#section-header p").html(result[listId]["description"]);
	var liLength = result[listId]["content"].length;
	for(var j=0;j<liLength;j++){
		var li = $("<li><a href="+result[listId]["content"][j][0]+"><div class='Image'><img src="+result[listId]["content"][j][1]+" /></div><p>"+result[listId]["content"][j][2]+"<br><span>"+result[listId]["content"][j][3]+"</span></p><i class='iconfont icon-xihuan'></i></a></li>");
		$("#content").append(li);
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
