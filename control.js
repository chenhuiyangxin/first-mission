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

//for on the go
var ongo = document.getElementsByClassName('img_3');
var foron = document.getElementsByClassName('img_4');
ongo[1].onclick = function(){
		var stop2 = setInterval(function(){
			var scrolltop2 = window.pageYOffset;
			var speed2 = Math.ceil((1000 - scrolltop2) / 5)
			if (scrolltop2 == 1000) {
				clearInterval(stop2);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop2 +speed2;

		},30);

}

foron[1].onclick = function(){
		var stop2 = setInterval(function(){
				var scrolltop2 = window.pageYOffset;
				var speed2 = Math.ceil((1000 - scrolltop2) / 5)
				if (scrolltop2 == 1000) {
					clearInterval(stop2);
				};
				document.documentElement.scrollTop = document.body.scrollTop = scrolltop2 +speed2;

			},30);
}

//for home
var fhome = document.getElementsByClassName('img_5');
var home = document.getElementsByClassName('img_6');
fhome[0].onclick = function(){
		var stop3 = setInterval(function(){
			var scrolltop3 = window.pageYOffset;
			var speed3 = Math.ceil((2695 - scrolltop3) / 7)
			if (scrolltop3 == 2695) {
				clearInterval(stop3);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop3 +speed3;

		},30);
}

//合并
/*
var forondata = [0,1000,3455,3744,4055,4697];
var fhomedata = [2695,1500,2195,4372];

for(var i = 0;i <= 5;i++){
	foron[i].onclick = function(){
			var stop2 = setInterval(function(){
			var scrolltop2 = window.pageYOffset;
			var speed2 = Math.ceil((forondata[i] - scrolltop2) / 5)
			if (scrolltop2 == forondata[i]) {
				clearInterval(stop2);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop2 +speed2;

		},30);
	}
}
*/
home[0].onclick = function(){
		var stop3 = setInterval(function(){
			var scrolltop3 = window.pageYOffset;
			var speed3 = Math.ceil((2695 - scrolltop3) / 7)
			if (scrolltop3 == 2695) {
				clearInterval(stop3);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop3 +speed3;

		},30);
}

//choose tablet

foron[2].onclick = function(){
		var stop4 = setInterval(function(){
			var scrolltop4 = window.pageYOffset;
			var speed4 = Math.ceil((3455 - scrolltop4) / 7)
			if (scrolltop4 == 3455) {
				clearInterval(stop4);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop4 +speed4;

		},30);


}

//not the right fit

fhome[1].onclick = function(){
		var stop5 = setInterval(function(){
			var scrolltop5 = window.pageYOffset;
			var speed5 = Math.ceil((1500 - scrolltop5) / 7)
			if (scrolltop5 == 1500) {
				clearInterval(stop5);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop5 +speed5;

		},30);


}

//choose labtop

foron[3].onclick = function(){
		var stop6 = setInterval(function(){
			var scrolltop6 = window.pageYOffset;
			var speed6 = Math.ceil((3744 - scrolltop6) / 7)
			if (scrolltop6 == 3744) {
				clearInterval(stop6);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop6 +speed6;

		},30);
}

//want a little of both
fhome[2].onclick = function(){
		var stop7 = setInterval(function(){
			var scrolltop7 = window.pageYOffset;
			var speed7 = Math.ceil((2195 - scrolltop7) / 5)
			if (scrolltop7 == 2195) {
				clearInterval(stop7);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop7 +speed7;

		},30);
}

//choose 2 in 1

foron[4].onclick = function(){
		var stop8 = setInterval(function(){
			var scrolltop8 = window.pageYOffset;
			var speed8 = Math.ceil((4055 - scrolltop8) / 5)
			if (scrolltop8 == 4055) {
				clearInterval(stop8);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop8 +speed8;

		},30);
}

//choose desktop

foron[5].onclick = function(){
		var stop9 = setInterval(function(){
			var scrolltop9 = window.pageYOffset;
			var speed9 = Math.ceil((4697 - scrolltop9) / 5)
			if (scrolltop9 == 4697) {
				clearInterval(stop9);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop9 +speed9;

		},30);
}

//choose all-in-one
fhome[3].onclick = function(){
		var stop10 = setInterval(function(){
			var scrolltop10 = window.pageYOffset;
			var speed10 = Math.ceil((4372 - scrolltop10) / 5)
			if (scrolltop10 == 4372) {
				clearInterval(stop10);
			};
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop10 +speed10;

		},30);
}

//legal
var legal = document.getElementsByClassName('img_10');
var legalcopy = document.getElementsByClassName('img_11');
var close = document.getElementsByClassName('img_12');
legal[1].onclick = function(){
	legalcopy[1].style.display = "block";
	close[1].style.display = "block";
}

//close
close[1].onclick = function(){
	this.style.display = "none";
	legalcopy[1].style.display = "none";
}

}


















