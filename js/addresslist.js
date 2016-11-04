	var  length = localStorage.length;
	for(var i = 0;i<length;i++){
		var key = localStorage.key(i);
		if(key.indexOf("address_")!=-1){
			$(".addrshow").show();
			$(".noaddrtip").hide();
			break;
		}else{
			$(".noaddrtip").show();
			$(".addrshow").hide();
		}
	}
	for(var j = 0;j<length;j++){
		var key = localStorage.key(j);
		if(key.indexOf("address_")!=-1){
			var address = JSON.parse(localStorage.getItem(key));
			if(key.indexOf("address_t")!=-1){
				var html = $("<div class='addrlist' data="+key+"><div><span class='username'>"+address["username"]+"</span><span class='userphone'>"+address["userphone"]+"</span></div><div><span class='useraddr'>"+address["useraddr"]+"</span><span class='detailaddr'>"+address["detailaddr"]+"</span></div><div><span><i class='defaultDot active'></i>默认地址</span><span class='edit'>编辑</span></div></div>");
				if($(".addrshow").children().length==0){
					$(".addrshow").append(html);
				}else{
					html.insertBefore($(".addrshow").children().eq(0));
				}
			}else{
				var html = $("<div class='addrlist' data="+key+"><div><span class='username'>"+address["username"]+"</span><span class='userphone'>"+address["userphone"]+"</span></div><div><span class='useraddr'>"+address["useraddr"]+"</span><span class='detailaddr'>"+address["detailaddr"]+"</span></div><div><span><i class='defaultDot'></i>默认地址</span><span class='edit'>编辑</span></div></div>");
				$(".addrshow").append(html);
			}
		}
	}


//默认地址点勾选
	$(document).on("touchstart",".defaultDot",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			var key = $(this).parents(".addrlist").attr("data");
			var address = JSON.parse(localStorage.getItem(key));
			localStorage.removeItem(key);
			var newKey = key.replace("t","f");
			$(this).parents(".addrlist").attr("data",newKey);
			localStorage.setItem(newKey,JSON.stringify(address));
		}else{
			var length = $(".addrlist").length;
			for(var k=0;k<length;k++){
				$(".addrlist").eq(k).find(".defaultDot").removeClass("active");
				var key = $(".addrlist").eq(k).attr("data");
				var address = JSON.parse(localStorage.getItem(key));
				localStorage.removeItem(key);
				var newKey = key.replace("t","f");
				$(".addrlist").eq(k).attr("data",newKey);
				localStorage.setItem(newKey,JSON.stringify(address));
			}
			$(this).addClass("active");
			var key = $(this).parents(".addrlist").attr("data");
			var address = JSON.parse(localStorage.getItem(key));
			localStorage.removeItem(key);
			var newKey = key.replace("f","t");
			$(this).parents(".addrlist").attr("data",newKey);
			localStorage.setItem(newKey,JSON.stringify(address));
		}
	})
	$(document).on("touchstart",".edit",function(){
		var key = $(this).parents(".addrlist").attr("data");
		location.href="twostep.html?key="+key;
	})

