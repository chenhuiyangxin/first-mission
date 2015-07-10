window.onload = function () {
//开头动画
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
//控制top图片
	var check ;
	check = setInterval(function(){
		var judgetop = window.pageYOffset;
		if (judgetop >= 500) {
			$("#top").slideDown(250);
		} 
		else{
			$("#top").slideUp(250);
		};
	},1);
//回到顶部
var top1 = document.getElementById('top');
var top2 = document.getElementById('top_1');
/*
top1.touchstart = function(){
	this.style.display = "none";
	top2.style.display = "block";
}

top2.touchend = function(){
	this.style.display = "none";
	top1.style.display = "block";
}
top1.onmousedown = function(){
	this.style.display = "none";
	top2.style.display = "block";
}

top2.onmouseup = function(){
	this.style.display = "none";
	top1.style.display = "block";
}
*/
top1.onclick = function(){
    var stop;
    stop = setInterval(function(){
    		var scrolltop = window.pageYOffset;
    		var speed = Math.ceil(scrolltop / 7);
    		document.documentElement.scrollTop = document.body.scrollTop= (scrolltop - speed);
    		if (scrolltop == 0) {
    			clearInterval(stop);
    		};
    },30);
}


//分页跳转
var ongo = document.getElementsByClassName('img_3');
console.log(ongo);
ongo[1].onclick = function(){
		var scrolltop2 = window.pageYOffset;
		for(var i = 0;i <= 1000;i++){
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop2+i;
			if (document.documentElement.scrollTop == document.body.scrollTop == 1000) {
				return;
			};
		}






}















}


















