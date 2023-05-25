

		// 퍼블리셔 김 민
		$(document).ready(function(){

			// windowHeight resizing
			var windowtHeight = $(window).outerHeight();
			var windowtWidth = $(window).outerWidth();
			var resize = windowtWidth / windowtHeight;
			$('#section_visual01').css('height', windowtHeight);

			$(window).resize(function() {
				var windowtHeight = $(window).outerHeight();
				var windowtWidth = $(window).outerWidth();
				var resize = windowtWidth / windowtHeight;
				var resizeHeight = windowtWidth / resize
				$('#section_visual01').css('height', resizeHeight);
			});

			//mobile menu
			$(".mobileMenu .hamburger").on('click', function() {
				$(".mobileMenu").toggleClass("open");
			});

			// click event
			$("#gnb >ul>li>a").on('click', function(e) {
				if (this.hash !== "") {
					e.preventDefault();
					var hash = this.hash;
					$('html, body').animate({
						scrollTop: $(hash).offset().top
						}, 800, function(){
						window.location.hash = hash;
					});
				}
			});

			// TOP  animate
			$('.btn_top a').on('click', function(){
				$('html, body').animate({
					scrollTop:0
				}, 700);
			});

			// TOP  scrolltop
			$(window).scroll(function() {
				var winHeight = $('body').height();
				var winScrollTop = $(this).scrollTop();
				if (winScrollTop > winHeight) {
					$(".btnGoTop").css("display", "block");
				}
				else {
					$(".btnGoTop").css("display", "none");
				}
				console.log(winHeight);
				console.log(winScrollTop);
			});

			// TAB
			$('ul.tabs li').on('click',function(){
				var tab_id = $(this).attr('data-tab');
				$('ul.tabs li').removeClass('on');
				$('.tab_wrap').removeClass('on');
				$(this).addClass('on');
				$("#"+ tab_id).addClass('on');
				return false;
			})

			//project career swiper
			var project = new Swiper('.rolling.swiper-container', {
				autoplay: {
					delay: 1500,
					disableOnInteraction: false,
				},
				direction: 'vertical',
				pagination: {
				el: '.swiper-pagination',
				clickable: true,
				},
			});

			//portfolio swiper
			var portfolio = new Swiper('.portfolio .swiper-container', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
					dynamicMainBullets: 1
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});

			//ajax 호출
			$(function(){
				searchSlide();
			});
			function searchSlide(){
				$.ajax ({
					type : "GET",
					url :'/mobile/include/ajax/getMainSearch.jsp', 
					dataType : 'html',
					success : function(data) { 
						if($.trim(data) == ""){
							return false;
						}			
						$('.rollingBox').html(data);
					}
				});
			}

			// loading progress bar
			$(window).on("scroll", function() {
				var currentPercentage = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
				$(".loadingBar").width(currentPercentage + "%");
			});

		});
