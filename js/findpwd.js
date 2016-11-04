//结局弹出键盘页面高度变化bug
var viewHeight = window.innerHeight;
$("input").focus(function()
{
	$(".warp").css("height",viewHeight);
}).blur(function()
{
	$(".warp").css("height","100%");
});

//用户名验证
	var tue1=false;
	var tue2=false;
	var tue3=false;
	var tue4=false;
	
	$("#users").focus(function()
	{
		$("#users").val("");
	}).blur(function()
	{
		 var sjh=$("#users");
		 var sj=sjh.val();
		 var sjl=sj.length;
	     var reg=/^1[3-578][0-9]{9}$/g;
	     var str=reg.test(sj);
		 if(str==false)
		 {
		 	$("#users").val("*你输入的手机号有误");
		 	tue1=false;
		 }
		 if(sjl==0)
		 {
		 	$("#users").val("*请输入11位手机号");
		 	tue1=false;
		 }
		 if(str&&sjl!=0)
		 {
		 	tue1=true;
		 }
		 
	});
	
	//获取验证码
		 var a=[];
	 
		 for(var i=65;i>=65,i<=90;i++)
		 {
			 a.push(i);
		 }
		 for(var i=97;i>=97,i<=122;i++)
		 {
			 a.push(i);
		 }
		 for(var i=48;i>=48,i<=57;i++)
		 {
		     a.push(i);	 
		 }
		 
		 $(".yzm2").click(function()
		 {
			 var b=new Array(4);
			 for(var j=0;j<4;j++)
			 { 
				var n=a[Math.floor(Math.random()*a.length)];
				b[j]=String.fromCharCode(n);
			 }
			 $(".yzm2").html(b.join(""));
		 });
		 
		 //验证码验证
		 $("#yzm1").focus(function()
		 {
		 	$(".yzm2").click();
		 	$("#yzm1").val("");
		 }).blur(function()
		 {
		 	var yzm2a=$("#yzm1").val();
		 	if(yzm2a.toLocaleLowerCase()!=$(".yzm2").html().toLocaleLowerCase())
		 	{
		 		$("#yzm1").val("*验证码错误");
		 		tue2=false;
		 	}
		 	else if(yzm2a.toLocaleLowerCase()==$(".yzm2").html().toLocaleLowerCase())
		 	{
		 		$("#yzm1").attr({"placeholder":"请输入验证码"});
		 		tue2=true;
		 	}
		 });
		 
		 
		 $("#pwd1").focus(function()
		 {
		 	$("#pwd1").val("");
		 }).blur(function()
		 {
		 	 var mima=$("#pwd1");
			 var mm=mima.val();
			 var sjl=mm.length;
		     if(sjl<6||sjl>20)
		     {
		     	$("#pwd1").val("*密码错误");
		     	tue3=false;
		     }
		     else
		     {
		     	tue3=true;
		     }
		 });
		 
		 $("#pwd2").focus(function()
		 {
		 	      $("#pwd2").val("");
		 }).blur(function()
		 {
		 	var c=$("#pwd2").val();
		 	if(c.length!=0)
		 	{
		 		if(c!=$("#pwd1").val())
		 		{
		 			$("#pwd2").val("*两次密码不一致");
		 			tue4=false;
		 		}
		 		else
		 		{
		 			tue4=true;
		 		}
		 	}
		 	else
		 	{
		 		 $("#pwd2").val("*密码不能为空");
		 		 tue4=false;
		 	}
		 	
		 });
		 
         
        document.querySelector(".confirms").addEventListener("touchend",function()
		{
			var username=document.getElementById("users").value;
			var pwd=document.getElementById("pwd2").value;
			var zhi=document.getElementsByClassName("confirms")[0];
			
			var req=new XMLHttpRequest();
			var urc="http://data.applinzi.com/findpwd.php?username="+username+"&pwd="+pwd;
			req.open("get",urc,true);
			req.onreadystatechange=function()
			{
				if(req.readyState==4&&req.status==200)
				{
					var result=parseInt(req.responseText);
					switch(result)
					{
						case 0:
						     
						     zhi.innerHTML="系统繁忙";
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
						     zhi.innerHTML="密码更改成功";
						     setTimeout(function()
						     {
						     	zhi.innerHTML="登录";
						     	location.href="denglu.html";
						     },1000);
						     break;
					}
				}
			}
			req.send();
		});