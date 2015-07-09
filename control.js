
//开头动画
window.onload = function () {
	$("#head img").delay(1500).fadeOut(500,function(){
		$("#part_1 .img_1").fadeIn(400,function(){
			$("#part_1 .img_2").fadeIn(370,function(){
				$("#part_1 .img_4").animate({right:"-21px",opacity:"1"},330,function(){
					$("#part_1 .img_3").fadeIn(300,function(){
					$(".wrap_2").removeClass("wrap_2").addClass("wrap_2_1");
						$("#part_2 .img_1").fadeIn(270,function(){
							$("#part_2 .img_2").fadeIn(250,function(){
								$("#part_2 .img_3").fadeIn(230,function(){
									$("#part_2 .img_4").fadeIn(200,function(){
										$("#part_2 .img_5").fadeIn(170,function(){
											$("#part_2 .img_6").fadeIn(150);
										});
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

//回到顶部
var top1 = document.getElementById('top');
var top2 = document.getElementById('top_1');
top1.touchstart = function(){
	this.style.display = "none";
	top2.style.display = "block";
}

top2.touchend = function(){
	this.style.display = "none";
	top1.style.display = "block";
}

