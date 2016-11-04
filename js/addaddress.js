	var key = location.href.split("=")[1];
	if(key){
		$(".titleChange").html("编辑收货地址");
		$("#footertwo").show();
		$(".confirm").hide();
		$(".edit").show();
		var info = JSON.parse(localStorage.getItem(key));
		$(".username").val(info["username"]);
		$(".userphone").val(info["userphone"]);	
		$(".userattr").val(info["useraddr"]);
		$(".detailaddr").val(info["detailaddr"]);
		if(key.indexOf("address_t")!=-1){
			$(".defaultDot").addClass("active");
		}
		$("#footertwo").on("touchstart",function(){
			localStorage.removeItem(key);
			location.href = "onestep.html";
		});
		$(".edit").on("touchstart",function(){
			if($(".username").val() == ""){
				$("#showtip").html("用户名不能为空");
			}
			else if($(".userphone").val() == "" || $(".userphone").hasClass("active")){
				$("#showtip").html("手机格式不正确");
			}
			else if($(".userattr").val() == ""){
				$("#showtip").html("用户地址不能为空");
			}
			else if($(".detailaddr").val() == ""){
				$("#showtip").html("详细地址不能为空");
			}else{
				$("#showtip").html("修改地址成功");
				var username = $(".username").val();
				var userphone = $(".userphone").val();
				var useraddr = $(".userattr").val();
				var detailaddr = $(".detailaddr").val();
				var list = {"username":username,"userphone":userphone,"useraddr":useraddr,"detailaddr":detailaddr};
				var defaultaddr = false;
				if($(".defaultDot").hasClass("active")){
					defaultaddr = true;
				}
				var length = localStorage.length;
				for(var i=0;i<length;i++){
					var key = localStorage.key(i);
					if(key.indexOf("address_")!=-1){
						var info = localStorage.getItem(key);
						if(info == JSON.stringify(list)){
							localStorage.removeItem(key);
							break;
						}
					}
				}
				var length = localStorage.length;
				if(defaultaddr==true){
					for(var j=0;j<length;j++){
						var key = localStorage.key(j);
						if(key.indexOf("address_t_")!=-1){
							var info = JSON.parse(localStorage.getItem(key));
							localStorage.removeItem(key);
							var index = parseInt(localStorage.getItem("addressIndex"));
							index++;
							localStorage.setItem("addressIndex",index);
							localStorage.setItem("address_f_"+index,JSON.stringify(info));
							break;
						}
					}
				}
				var index =parseInt(localStorage.getItem("addressIndex"));
				index++;
				localStorage.setItem("addressIndex",index);
				if(defaultaddr){
					localStorage.setItem("address_t_"+index,JSON.stringify(list));
				}else{
					localStorage.setItem("address_f_"+index,JSON.stringify(list));
				}
				$("#showtip").stop().fadeIn(700).fadeOut(700,function(){
					location.href="onestep.html";
				});
			}
		});
	}

	telreg();
	function telreg(){
		$(".userphone").blur(function(){
			var reg=/^1[3|4|5|7|8]\d{9}$/;
			if(reg.test($(this).val())){
				$(this).removeClass("active");
				return true;
			}else{
				$(this).addClass("active");
				return false;
			}
		});
	}
	function othereg(obj){
		if($(obj).val()!=""){
			$(obj).removeClass("active");
				return true;
			}else{
				$(obj).addClass("active");
				return false;
			}
	}
	$(".confirm").on("touchstart",function(){
		if($(".username").val() == ""){
			$("#showtip").html("用户名不能为空");
		}
		else if($(".userphone").val() == "" || $(".userphone").hasClass("active")){
			$("#showtip").html("手机格式不正确");
		}
		else if($(".userattr").val() == ""){
			$("#showtip").html("用户地址不能为空");
		}
		else if($(".detailaddr").val() == ""){
			$("#showtip").html("详细地址不能为空");
		}else{
				$("#showtip").html("填写地址成功");
				var username = $(".username").val();
				var userphone = $(".userphone").val();
				var useraddr = $(".userattr").val();
				var detailaddr = $(".detailaddr").val();
				var defaultaddr = false;
				if($(".defaultDot").hasClass("active")){
					defaultaddr = true;
				}
				var list = {"username":username,"userphone":userphone,"useraddr":useraddr,"detailaddr":detailaddr};
				var length = localStorage.length;
				for(var i=0;i<length;i++){
					var key = localStorage.key(i);
					if(key.indexOf("address_")!=-1){
						var info = localStorage.getItem(key);
						if(info == JSON.stringify(list)){
							localStorage.removeItem(key);
							break;
						}
					}
				}
				var length = localStorage.length;
				if(defaultaddr==true){
					for(var j=0;j<length;j++){
						var key = localStorage.key(j);
						if(key.indexOf("address_t_")!=-1){
							var info = JSON.parse(localStorage.getItem(key));
							localStorage.removeItem(key);
							var index = parseInt(localStorage.getItem("addressIndex"));
							index++;
							localStorage.setItem("addressIndex",index);
							localStorage.setItem("address_f_"+index,JSON.stringify(info));
							break;
						}
					}
				}
				if(localStorage.getItem("addressIndex")){
					var index =parseInt(localStorage.getItem("addressIndex"));
					index++;
					localStorage.setItem("addressIndex",index);
					if(defaultaddr){
						localStorage.setItem("address_t_"+index,JSON.stringify(list));
					}else{
						localStorage.setItem("address_f_"+index,JSON.stringify(list));
					}
					
				}else{
					localStorage.setItem("addressIndex",1);
					if(defaultaddr){
						localStorage.setItem("address_t_"+1,JSON.stringify(list));
					}else{
						localStorage.setItem("address_f_"+1,JSON.stringify(list));
					}
				}
				$("#showtip").stop().fadeIn(700).fadeOut(700,function(){
					location.href="onestep.html";
				});
				
			}
	});
	//点 默认地址
	$(".defaultDot").on("touchstart",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});