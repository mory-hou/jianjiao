$(".view").eq(0).show();
$(".navCtrl li").on("touchstart",function(){
	var liIndex = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".view").eq(liIndex).show().siblings().hide();
});
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 5,
    freeMode: true,
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
