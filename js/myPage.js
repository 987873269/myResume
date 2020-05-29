// 入口函数
$(function() {
	var wh = $(window).height();
	var wh2 = $(window).height() * 0.1;
	flag = false;

	//封装全局动画函数
	function myanimate(cl, act, time, speed) {
		speed ? speed : speed = "swing"
		return new Promise(function(resolve, reject) {
			$(cl).animate(act, time, speed, function() {
				resolve();
			})
		});
	}

	// 点击next 往下播放一屏幕
	$(".next").click(function(event) {
		$.fn.fullpage.moveSectionDown();
	});

	$('#fullpage').fullpage({
		//添加fullpage属性
		navigation: true,
		loopBottom: false,
		/*滚动后*/
		afterLoad: function(anchorLinke, index) {

			//第一页开始
			if (index == 1) {
				flag = true;
				$(".next").fadeOut();
				myanimate(".by_man", {
						"left": "50%"
					}, 1000)
					.then(() => {
						return myanimate(".text01", {
							"opacity": 1
						}, 500)
					})
					.then(() => {

						$(".next").fadeIn();
					})
			};
			// 第一页结束

			// 第三页开始
			if (index == 3 && flag == true) {
				$(".next").fadeOut();
				myanimate(".s_bubble_1", {
						"opacity": 1
					}, 300)
					.then(() => {
						return myanimate(".m_bubble_1", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".b_bubble_1", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".s_bubble_2", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".m_bubble_2", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".b_bubble_2", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".s_bubble_3", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".m_bubble_3", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".b_bubble_3", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".s_bubble_4", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".m_bubble_4", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".b_bubble_4", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						return myanimate(".wh", {
							"opacity": 1
						}, 300);
					})
					.then(() => {
						$(".next").fadeIn();
					})

			};
			//第三页结束

			//第四页开始（直接进入）
			if (index == 4) {

				$(".next").fadeOut();
				$(".text03").addClass("text03-a");

				myanimate(".hand-05", {
					"bottom": 0
				}, 3000)
				myanimate(".commpany", {
					"right": "0%"
				}, 3000, "easeOutBack").then(() => {
					return myanimate(".succeed", {
						"opacity": 1
					}, 200)
				}).then(() => {
					$(".mouse-05-a").animate({
						"opacity": 1
					})
					$(".next").fadeIn();
				})
			}
			//第四页结束

			//第五页开始
			if (index == 5) {
				$(".next").fadeOut();
				$(".tx-5").animate({
					"opacity": 1
				}, 500);
				myanimate(".qp01-5", {
						"opacity": 1
					}, 500)
					.then(() => {
						return myanimate(".qp02-5", {
							"opacity": 1
						}, 500)
					})
					.then(() => {
						return myanimate(".qp03-5", {
							"opacity": 1
						}, 500)
					})
					.then(() => {
						return myanimate(".final_05", {
							"opacity": 1
						}, 500)
					})
					.then(() => {
						$(".next").fadeIn();
					})
			};
			//第五页结束

			//第六页开始
			if (index == 6) {
				$(".next").fadeOut();
				myanimate(".text-06-1", {
						"margin-left": "0"
					}, 1000, "easeOutBack")
					.then(() => {
						return myanimate(".text-06-2", {
							"margin-right": "0"
						}, 1000, "easeOutBack")
					}).then(() => {
						// $(".text-06-1").addClass("text06-a");
						// $(".text-06-2").addClass("text06-a");
						$(".next").fadeIn();
					})
			}
			//第六页结束

			//第七页开始
			if (index == 7) {
				console.log(index)
				$(".next").fadeIn();
			}
			//第七页结束

			//第八页的预处理
			$(".contact").hover(function() {
				$(".button-08-a").show();
			}, function() {
				$(".button-08-a").hide();
			});
			
			//第八页开始
			/* if (index !== 8) {
				$(".button-08-a").hide();
			} */
			if(index == 8){
				$(".next").fadeOut();
			}
			
			//点击弹出微信号
			$(".button-08-a").off("click").on("click", function() {
				alert("微信：wxid_x71gp700ikjr22,感谢您阅读完我的简历,欢迎联系！");
			})
			// 点击 再来一次
			$(".again").click(function(event) {
				// 1. 返回第1屏幕 
				$.fn.fullpage.moveTo(1);
				// 2. 所有的动画都复原 
				// 做动画的元素 清除 行内样式就可以
				// 所有带有动画的div盒子添加 move 类名
				$("img, .move").attr("style", "");
			});
			// 手跟随鼠标移动
			$(document).mousemove(function(event) {
				var x = event.pageX - $(".hand-08").width() / 2;
				var y = event.pageY + 10;
				// 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
				var minY = wh - 449;
				// 把鼠标在页面中的坐标给hand手left top 
				if (y < minY) {
					y = minY;
				}
				$(".hand-08").css({
					"left": x,
					"top": y
				});
			})
			//第八页结束
		},
		/*滚动时*/
		onLeave: function(index, nextIndex, direction) {
			
			//第二页开始
			if (index == 1 && nextIndex == 2 && flag == true) {
				$(".next").fadeOut();
				$(".text01").hide();
				$(".by_man").hide();
				$(".by_man1").show()
				myanimate(".by_man1", {
						"bottom": -(wh - wh2),
						"left": "40%",
						"height": "70%"
					}, 1000)
					.then(() => {
						return myanimate(".text02", {
							"opacity": 1
						}, 1000)
					}).then(() => {
						$(".next").fadeIn();
					})
			}
			//第二页结束

			//第四页开始（滑动进入）
			if (index == 3 && nextIndex == 4) {

				$(".next").fadeOut();
				$(".text03").addClass("text03-a");

				myanimate(".hand-05", {
					"bottom": 0
				}, 3000)
				myanimate(".commpany", {
					"right": "0%"
				}, 3000, "easeOutBack").then(() => {
					return myanimate(".succeed", {
						"opacity": 1
					}, 200)
				}).then(() => {
					$(".mouse-05-a").animate({
						"opacity": 1
					})
					$(".next").fadeIn();
				})
			}
			//第四页结束
	
		}
	});
});
