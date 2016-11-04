$("#logout").on("touchstart",function(){
	$("#showderset").show();
	$("#footer").animate({"bottom":"2rem"},600);
});
$("#no").on("touchstart",function(){
	$("#footer").animate({"bottom":"-11rem"},600,function(){
		$("#showderset").hide();
	});
});

$("#yes").on("touchstart",function(){
	localStorage.removeItem("jj_username");
})