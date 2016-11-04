//登录页面
//解决弹出键盘页面高度变化bug
var viewHeight = window.innerHeight; //获取可写区域高度
$("input").focus(function()
{
	$(".warp").css("height",viewHeight);
}).blur(function()
{
	$(".warp").css("height","100%");
});

document.querySelector(".login").addEventListener("touchend",function()
{
	var username=document.getElementById("users").value;
	var pwd=document.getElementById("pwd").value;
	var zhi=document.getElementsByClassName("login")[0];
	
	var req=new XMLHttpRequest();
	var urc="http://data.applinzi.com/login.php?username="+username+"&pwd="+pwd;
	req.open("get",urc,true);
	req.onreadystatechange=function()
	{
		if(req.readyState==4&&req.status==200)
		{
			var result=parseInt(req.responseText);
			switch(result)
			{
				case 0:
				     
				     zhi.innerHTML="密码不正确";
				     setTimeout(function()
				     {
				     	zhi.innerHTML="登录";
				     },1000);
				     break;
				case 1:
				     
				     zhi.innerHTML="用户名不存在";
				     setTimeout(function()
				     {
				     	zhi.innerHTML="登录";
				     },1000);
				     break;
				case 2:
				     var username=$("#users").val();
				     var names = {"username":username};
				     zhi.innerHTML="登录成功";
				     localStorage.setItem("jj_username",JSON.stringify(names));
				     setTimeout(function()
				     {
				     	zhi.innerHTML="登录";
				     	location.href="shouye.html";
				     },1000);
				     break;
			}
		}
	}
	req.send();
});

