
//开头动画
window.onload = function () {
	$("#head img").delay(1500).fadeOut(500,function(){
		$("#part_1 .img_1").fadeIn(300,function(){
			$("#part_1 .img_2").fadeIn(250,function(){
				$("#part_1 .img_3").delay(250).fadeIn(200,function(){
					$(".wrap_2").removeClass("wrap_2").addClass("wrap_2_1");
					$("#part_2 .img_1").fadeIn(150,function(){
						$("#part_2 .img_2").fadeIn(100,function(){
							$("#part_2 .img_3").fadeIn(50,function(){
								$("#part_2 .img_4").fadeIn(50,function(){
									$("#part_2 .img_5").fadeIn(50,function(){
										$("#part_2 .img_6").fadeIn(50);
									});
								});
							});
						});
					});
				});
			});
		});
	});
}


//