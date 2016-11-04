var length  = localStorage.length;
for(var i=0;i<length;i++){
	var key = localStorage.key(i);
	if(key.indexOf("jj_username")!=-1){
		var info = JSON.parse(localStorage.getItem(key));
		$("#headerfooter .zhuce").html(info["username"]);
		break;
	}else{
		$("#headerfooter .zhuce").html("点击登录/注册");
		$("#headerfooter").on("touchstart",function(){
			location.href="denglu.html";
		});
	}
}

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
