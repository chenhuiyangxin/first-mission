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


//打断正在跳转的&&&控制top图片出现跟消失
var istop = true;
//获取页面可视区高度
var clientHeight = document.documentElement.clientHeight;
console.log(clientHeight);
//滚动条滚动时触发
window.onscroll = function(){
    var scrolltop = window.pageYOffset;
    if(scrolltop >= clientHeight){
    	$("#top").slideDown(250);
    }
    else{
		$("#top").slideUp(250);

    }
	if(!istop){
		clearInterval(stop);
	}
	istop = false;
}

//回到顶部
var top1 = document.getElementById('top');
var top2 = document.getElementById('top_1');
var stop;

$("#top").bind("touchstart",function(){
	top1.style.display = "none";
	top2.style.display = "block";
})

top2.onmouseup = function(){
	this.style.display = "none";
	top1.style.display = "block";
	console.log("dede");
    stop = setInterval(function(){
    var scrolltop = window.pageYOffset;
    var speed = Math.ceil(scrolltop / 7);
    istop = true;
    document.documentElement.scrollTop = document.body.scrollTop= (scrolltop - speed);
    if (scrolltop == 0) {
    	clearInterval(stop);
    	};
    },30);
}

top1.onclick = function(){

}


//分页跳转

//for on the go
var ongo = document.getElementsByClassName('img_3');
var ongo1 = document.getElementsByClassName('img_3_1');
var foron = document.getElementsByClassName('img_4');

$("#part_2 .img_3").bind("touchstart",function(){
	ongo[1].style.display = "none";
	ongo1[0].style.display = "block";
	$("#part_2 .img_4").removeClass("img_4").addClass("img_4_1");
})

ongo1[0].onmouseup = function(){
			this.style.display = "none";
			ongo[1].style.display = "block";
			$("#part_2 .img_4_1").removeClass("img_4_1").addClass("img_4");
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop2 = window.pageYOffset;
			var speed2 = Math.ceil((1000 - scrolltop2) / 5)
			if (scrolltop2 == 1000) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop2 +speed2;

		},30);

			}

}

$("#part_2 .img_4").bind("touchstart",function(){
	ongo[1].style.display = "none";
	ongo1[0].style.display = "block";
	$("#part_2 .img_4").removeClass("img_4").addClass("img_4_1");
})

foron[1].onclick = function(){
				ongo1[0].style.display = "none";
				ongo[1].style.display = "block";
				this.className = "img_4";
				setTimeout(lag,100);
				function lag(){
		        stop = setInterval(function(){
    			istop = true;
				var scrolltop2 = window.pageYOffset;
				var speed2 = Math.ceil((1000 - scrolltop2) / 5)
				if (scrolltop2 == 1000) {
					clearInterval(stop);
				};
				document.documentElement.scrollTop = document.body.scrollTop = scrolltop2 +speed2;

			},30);					
				}

}

//for home
var fhome = document.getElementsByClassName('img_5');
var fhome1 = document.getElementsByClassName('img_5_1');
var home = document.getElementsByClassName('img_6');

$("#part_2 .img_5").bind("touchstart",function(){
	fhome[0].style.display = "none";
	fhome1[0].style.display = "block";
	$("#part_2 .img_6").removeClass("img_6").addClass("img_6_1");
})

fhome1[0].onmouseup = function(){
			this.style.display = "none";
			fhome[0].style.display = "block";
			$("#part_2 .img_6_1").removeClass("img_6_1").addClass("img_6");
			setTimeout(lag,100);
			function lag(){
		 	stop = setInterval(function(){
    		istop = true;
			var scrolltop3 = window.pageYOffset;
			var speed3 = Math.ceil((2695 - scrolltop3) / 7);
			istop = true;
			if (scrolltop3 == 2695) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop3 +speed3;

		},30);				
			}

}

$("#part_2 .img_6").bind("touchstart",function(){
	fhome[0].style.display = "none";
	fhome1[0].style.display = "block";
	$("#part_2 .img_6").removeClass("img_6").addClass("img_6_1");
})

home[0].onclick = function(){
			fhome1[0].style.display = "none";
			fhome[0].style.display = "block";
			this.className = "img_6";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop3 = window.pageYOffset;
			var speed3 = Math.ceil((2695 - scrolltop3) / 7)
			if (scrolltop3 == 2695) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop3 +speed3;

		},30);				
			}

}

//choose tablet

$("#part_3 .img_4").bind("touchstart",function(){
	$(this).removeClass("img_4").addClass("img_4_1");
})

foron[2].onclick = function(){
			this.className = "img_4";
			setTimeout(lag,100);
			function lag(){
			stop = setInterval(function(){
    		istop = true;
			var scrolltop4 = window.pageYOffset;
			var speed4 = Math.ceil((3455 - scrolltop4) / 7)
			if (scrolltop4 == 3455) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop4 +speed4;

		},30);
			};
			


}

//not the right fit

$("#part_3 .img_5").bind("touchstart",function(){
	$(this).removeClass("img_5").addClass("img_5_1");
})

fhome[1].onclick = function(){
			this.className = "img_5";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop5 = window.pageYOffset;
			var speed5 = Math.ceil((1500 - scrolltop5) / 7)
			if (scrolltop5 == 1500) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop5 +speed5;

		},30);


			}

}

//choose labtop

$("#part_4 .img_4").bind("touchstart",function(){
	$(this).removeClass("img_4").addClass("img_4_1");
})

foron[3].onclick = function(){
			this.className = "img_4";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop6 = window.pageYOffset;
			var speed6 = Math.ceil((3746 - scrolltop6) / 7)
			if (scrolltop6 == 3746) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop6 +speed6;

		},30);				
			}

}

//want a little of both

$("#part_4 .img_5").bind("touchstart",function(){
	$(this).removeClass("img_5").addClass("img_5_1");
})

fhome[2].onclick = function(){
			this.className = "img_5";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop7 = window.pageYOffset;
			var speed7 = Math.ceil((2195 - scrolltop7) / 5)
			if (scrolltop7 == 2195) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop7 +speed7;

		},30);				
			}

}

//choose 2 in 1

$("#part_5 .img_4").bind("touchstart",function(){
	$(this).removeClass("img_4").addClass("img_4_1");
})

foron[4].onclick = function(){
			this.className = "img_4";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop8 = window.pageYOffset;
			var speed8 = Math.ceil((4057 - scrolltop8) / 5)
			if (scrolltop8 == 4057) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop8 +speed8;

		},30);				
			}

}

//choose desktop

$("#part_6 .img_4").bind("touchstart",function(){
	$(this).removeClass("img_4").addClass("img_4_1");
})

foron[5].onclick = function(){
			this.className = "img_4";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
    		istop = true;
			var scrolltop9 = window.pageYOffset;
			var speed9 = Math.ceil((4699 - scrolltop9) / 5)
			if (scrolltop9 == 4699) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop9 +speed9;

		},30);				
			}

}

//choose all-in-one

$("#part_6 .img_5").bind("touchstart",function(){
	$(this).removeClass("img_5").addClass("img_5_1");
})

fhome[3].onclick = function(){
			this.className = "img_5";
			setTimeout(lag,100);
			function lag(){
		    stop = setInterval(function(){
			var scrolltop10 = window.pageYOffset;
    		istop = true;
			var speed10 = Math.ceil((4374 - scrolltop10) / 5)
			if (scrolltop10 == 4374) {
				clearInterval(stop);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop10 +speed10;

		},30);				
			}

}

//legal
var legal = document.getElementsByClassName('img_10');
var legal1 = document.getElementsByClassName('img_10_1');
var legalcopy = document.getElementsByClassName('img_11');
var close = document.getElementsByClassName('img_12');

$("#part_10 .img_10").bind("touchstart",function(){
	legal[1].style.display = "none";
	legal1[0].style.display = "block";
})

legal1[0].onmouseup = function(){
	legal1[0].style.display = "none";
	legal[1].style.display = "block";
	legalcopy[1].style.display = "block";
	close[1].style.display = "block";
}

//close
close[1].onclick = function(){
	this.style.display = "none";
	legalcopy[1].style.display = "none";
}

}


















