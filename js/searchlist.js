function init(){
	var myswiper1 = new Swiper("#swiper1",{
		autoplay: false,//可选选项，自动滑动
		slidesPerView:"auto",
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
		resistanceRatio:0,
	});
	$("#swiper1 .swiper-slide").on("touchstart",function(){
	   var id=$(this).attr("goodsid");
	   myswiper2.slideTo(id);
	 
	});
	var myswiper2 = new Swiper("#swiper2",{
			autoplay: false,//可选选项，自动滑动
			resistanceRatio:0,
			onSlideChangeStart:function(){
				$("#swiper1 .swiper-slide").removeClass('active').eq(myswiper2.activeIndex).addClass("active");
				$("#swiper2 .warp-sli").removeClass('sli').eq(myswiper2.activeIndex).addClass("sli");
				$("#swiper2 .warp-sli .sli-nav").removeClass('nav-frist1').eq(myswiper2.activeIndex).addClass("nav-frist1");
	  			var left=($("#swiper1 .swiper-slide:eq(0)").width())/3.5+$("#swiper1 .swiper-slide:eq("+myswiper2.activeIndex+")").offset().left;
				$("#slideline").animate({"left":left});
				loaded ();
			}
	});
	}
init();