$(document).ready(function() {
	//竖屏轮播设置
	var myswiper = new Swiper('.myswiper', {
		direction: 'vertical',
		//loop: true,//是否循环
		pagination: '.swiper-pagination', //添加监听器
		observer: true,
		observeParents: true,
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheelControl: true,
		paginationClickable: true,
		//页面特效
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	});

	//第一页横屏轮播设置
	var swiper1_1 = new Swiper('.swiper1_1', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
	});

	//第五页的图片轮播设置
	var swiper5_1 = new Swiper('.swiper5_1', {
		//自动播放
		centeredSlides: true,
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		loop: true, //是否循环
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
		}
	});
});