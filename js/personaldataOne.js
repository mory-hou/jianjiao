
//结局弹出键盘页面高度变化bug
var viewHeight = window.innerHeight;
$("input").focus(function()
{
	$(".warp").css("height",viewHeight);
}).blur(function()
{
	$(".warp").css("height","100%");
});

var cell=JSON.parse(localStorage.getItem("jianjiao"));
if(cell!=null)
{
    var cells=cell["username"];
    $("#cellphone").val(cells);
}


$(".nexts").on("touchend",function()
{
	
	var src;
	if($("#nickname").val()!="")
	{
		var nickname=$("#nickname").val();
	}
	if($("#signature").val()!="")
	{
		var signature=$("#signature").val();
	}
	if($("#cellphone").val()!="")
	{
		var cellphone=$("#cellphone").val();
	}
	
    var datas={"nickname":nickname,"signature":signature,"cellphone":cellphone}
    localStorage.setItem("jianjiaodatas",JSON.stringify(datas));
    location.href="personaldataTwo.html";
});


$(".a3").on("touchend",function(){
	if($("#cellphone").val()!="")
	{
		var cellphone=$("#cellphone").val();
	}
	
    var datas={"cellphone":cellphone};
    localStorage.setItem("jianjiaodatas",JSON.stringify(datas));
    location.href="personaldataTwo.html";
})




$(".box").hide();
$(".ft").hide();
$(".port").on("touchend",function()
{
	$(".box").fadeIn(function()
	{
		$(".ft").fadeIn(2000);
	});
});

$(".cancle").on("touchend",function()
{
	$(".box").fadeOut();
});





//调用摄像头和相册
$(".camera a").on("touchend",captureImage);

// 扩展API加载完毕后调用onPlusReady回调函数 
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API 
function onPlusReady() {
	console.log("plusready");
}
// 拍照
function captureImage(){
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	//console.log("Resolution: "+res+", Format: "+fmt);
	cmr.captureImage( function( path ){
			alert( "Capture image success: " + path );  
		},
		function( error ) {
			alert( "Capture image failed: " + error.message );
		},
		{resolution:res,format:fmt}
	);
}
