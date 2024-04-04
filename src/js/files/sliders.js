import Swiper, { Navigation } from 'swiper'
import '../../scss/base/swiper.scss'

function initSliders() {
	if (document.querySelector('.portfolio__slider')) {
		new Swiper('.portfolio__slider', {
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 56,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			effect: 'fade',
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},

			navigation: {
				prevEl: '.portfolio__arrow_left',
				nextEl: '.portfolio__arrow_right',
			},

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
					autoHeight: true,
				},
				650: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 56,
				},
			},

			on: {},
		})
	}
}

// Full screen scroll
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar =
				sliderScrollItem.querySelector('.swiper-scrollbar')
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders()
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
})
