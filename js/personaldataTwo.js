
//结局弹出键盘页面高度变化bug
var viewHeight = window.innerHeight;
$("input").focus(function()
{
	$(".warp").css("height",viewHeight);
}).blur(function()
{
	$(".warp").css("height","100%");
});

if(localStorage.getItem("jianjiaodatas")!=null)
{
	var datas=JSON.parse(localStorage.getItem("jianjiaodatas"));
	if(datas["nickname"])
	{
		var nickname=datas["nickname"]; //昵称
	}
	else
	{
		var nickname="";
	}
	if(datas["signature"])
	{
		var signature=datas["signature"]; //签名
	}
	else
	{
		var signature="";
	}
	if(datas["cellphone"])
	{
		var cellphone=datas["cellphone"]; //电话
	}
	else
	{
		var cellphone="";
	}
}


$(".ensure").on("touchend",function()
{
	if($(".male").prop("checked"))
	{
		var sexs=$(".male").val(); //性别
	}else if($(".female").prop("checked")){
		var sexs=$(".female").val();
	}
	else{
		var sexs="";
	}
	
	if($("#ages").val())
	{
		var ages=$("#ages").val();  //年龄段
	}else{
		var ages="";
	}
	
	if($("#stars").val())
	{
		var stars=$("#stars").val(); //星座
	}else{
		var stars="";
	}
	
	if($("#profession").val())
	{
		var profession=$("#profession").val(); //职业
	}else{
		var profession="";
	}
	
	var req=new XMLHttpRequest();
	var urc="http://data.applinzi.com/personaldata.php?nickname="+nickname+"&signature="+signature+"&cellphone="+cellphone+"&sexs="+sexs+"&ages="+ages+"&stars="+stars+"&profession="+profession;
	
	req.open("get",urc,true);
	req.onreadystatechange=function()
	{
		if(req.readyState==4&&req.status==200)
		{
			var result=parseInt(req.responseText);
			switch(result)
			{
				
				case 1:
				     
				     $(".ensure").html("填写的号码未注册");
				     setTimeout(function()
				     {
				     	$(".ensure").html("确定");
				     },2000);
				     break;
				case 2:
				     $(".ensure").html("保存成功");
				     setTimeout(function()
				     {
				     	localStorage.removeItem('jianjiaodatas');
				     	$(".ensure").html("确定");
				     	location.href="shouye.html";
				     },2000);
				     break;
			}
		}
	}
	req.send();
});


$(".a3").on("touchend",function(){
	var sexs="";
	var ages="";
	var stars="";
	var profession="";
	var req=new XMLHttpRequest();
	var urc="http://data.applinzi.com/personaldata.php?nickname="+nickname+"&signature="+signature+"&cellphone="+cellphone+"&sexs="+sexs+"&ages="+ages+"&stars="+stars+"&profession="+profession;
	
	req.open("get",urc,true);
	req.onreadystatechange=function()
	{
		if(req.readyState==4&&req.status==200)
		{
			var result=parseInt(req.responseText);
			switch(result)
			{
				
				case 1:
				     
				     $(".ensure").html("填写的号码未注册");
				     setTimeout(function()
				     {
				     	$(".ensure").html("确定");
				     },2000);
				     break;
				case 2:
				     setTimeout(function()
				     {
				     	localStorage.removeItem("jianjiaodatas");
				     	location.href="shouye.html";
				     },2000);
				     break;
			}
		}
	}
	req.send();
});