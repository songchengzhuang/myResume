$(document).ready(function() {
	/*向导航条中添加内容*/
	$(".swiper-pagination span:eq(0)").html("欢迎您");
	$(".swiper-pagination span:eq(1)").html("关于我");
	$(".swiper-pagination span:eq(2)").html("专业技能");
	$(".swiper-pagination span:eq(3)").html("GitHub");
	$(".swiper-pagination span:eq(4)").html("作品展示");
	$(".swiper-pagination span:eq(5)").html("联系我吧");
	/*音乐点击暂停效果*/
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	/*音乐自动播放完了后，转盘自动停止*/
	audio.addEventListener("ended", function(event) {
		music.className = "#1";
	}, false);

	/*音乐转盘点击音乐停止播放和 装盘停止转动 .但是这是在电脑端的点击，要是在手机端的就要 改成 触碰。*/
	music.onclick = function() {
		if(audio.paused) {
			audio.play();
			this.className = "playdonghua";
			//this.setAttribute("class","playdonghua");
			//this.style.animationPlayState="running";   //可以让转盘停在原处，但是兼容性很差。
		} else {
			audio.pause();
			this.className = "#1";
			//this.setAttribute("class","#1");
			//this.style.animationPlayState="paused";   //可以让转盘停在原处，但是兼容性很差。
		}
	}
});