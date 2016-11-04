document.addEventListener("plusready", function() {  
    // 注册返回按键事件  
    plus.key.addEventListener('backbutton', function() {  
        // 事件处理  
        plus.nativeUI.confirm("退出程序？", function(event) {  
            if (event.index) {  
                plus.runtime.quit();  
            }  
        }, null, ["取消", "确定"]);  
    }, false);  
});  


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

//验证手机号
function yztel()
{
	var sjh=$("#users");
	 var sj=sjh.val();
	 var sjl=sj.length;
     var reg=/^1[3-578][0-9]{9}$/g;
     var str=reg.test(sj);
	 if(str==false)
	 {
	 	tue1=false;
	 	$(this).val("*手机号输入错误");
	 }
	 if(sjl==0)
	 {
	 	$("#users").attr({"placeholder":"请输入11位手机号"});
	 	tue1=false;
	 }
	 if(str&&sjl!=0)
	 {
	 	tue1=true;
	 }
}

$("#users").focus(function()
{
 	$("#users").val("");
}).blur(function()
{
	yztel();
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
	 
	 function yzz()
	 {
	 	 var b=new Array(4);
		 for(var j=0;j<4;j++)
		 { 
			var n=a[Math.floor(Math.random()*a.length)];
			b[j]=String.fromCharCode(n);
		 }
		 $(".yzm2").html(b.join(""));
 }
 
 $(".yzm2").on("touchend",yzz);
 
 //验证码验证
 function yzyzm()
 {
 	var yzm2a=$("#yzm1").val();
 	if(yzm2a.toLocaleLowerCase()!=$(".yzm2").html().toLocaleLowerCase())
 	{
 		$("#yzm1").val("*验证码错误");
 		tue2=false;
 	}
 	else if(yzm2a.toLocaleLowerCase()==$(".yzm2").html().toLocaleLowerCase())
 	{
 		tue2=true;
 	}
 }
 
 $("#yzm1").focus(function()
 {
 	yzz();
 	$("#yzm1").val("");
 }).blur(function()
 {
 	 yzyzm();
 });
 
 //密码
 function yzpwd()
 {
 	 var mima=$("#pwd");
	 var mm=mima.val();
     if(mm.length<21 && mm.length>5)
     {
     	tue3=true;
     }
     else
     {
     	$("#pwd").val("*密码错误");
        tue3=false;  
     }
 }
 
 $("#pwd").focus(function()
 { 
 	$("#pwd").val("");
 }).blur(function()
 {
 	 yzpwd();
 });
 

//执行注册
 document.getElementById("btn").addEventListener("touchstart",function()
 {
 	yztel();
 	yzyzm();
 	yzpwd();	
 	if((tue1 && tue2) && tue3)
 	{
 		var username=document.getElementById("users").value;
 		var pwd=document.getElementById("pwd").value;
 		var ts=document.getElementById("btn");
 		
 		var req=new XMLHttpRequest();
		var urc="http://data.applinzi.com/register.php?username="+username+"&pwd="+pwd;
		req.open("get",urc,true);
		req.onreadystatechange=function()
		{
			if(req.readyState==4&&req.status==200)
			{
				var result=parseInt(req.responseText);
				switch(result)
				{
					case 0:
					     ts.innerHTML="服务器异常";
					     setTimeout(function()
					     {
					     	ts.innerHTML="确定";
					     },3000);
					     break;
					case 1:
					     ts.innerHTML="注册成功";
					     var jianjiao={"username":username};
					     localStorage.setItem("jianjiao",JSON.stringify(jianjiao));
					     setTimeout(function()
					     {
					     	ts.innerHTML="确定";
					     	location.href="personaldataOne.html";
					     },3000);
					     break;
					case 2:
					     ts.innerHTML="该用户名已经存在";
					     setTimeout(function()
					     {
					     	ts.innerHTML="确定";
					     },3000);
					     break;
				}
			}
		}
		req.send();
 		
 	}
 });
			