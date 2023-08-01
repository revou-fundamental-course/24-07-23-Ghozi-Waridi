const header = document.querySelector("header")
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
})

const nav = document.querySelector('.navlist')
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener("click", () => {
	nav.classList.toggle('nav-active', )
})





const slides = document.querySelectorAll('.slide')
const btns = document.querySelectorAll('.btn')
let curret = 1

var manual = function(manual){
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
	btns.forEach((btn) => {
		btn.classList.remove('active')
	})
	slides[manual].classList.add('active')
	btns[manual].classList.add('active')
}

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		manual(i)
		curret = i
	})
})
var repeat = function(activeClass){
	let active = document.getElementsByClassName('active')
	let i = 1

	var repeater = () => {
		setTimeout(function(){
			[...active].forEach((activeSlide) => {
				activeSlide.classList.remove('active')
			})
			slides[i].classList.add('active')
			btns[i].classList.add('active')
			i++ 
	
			if(slides.length == i){
				i = 0
			}
			if(i >= slides.length){
				return
			}
			repeater()
		}, 3000)
	}
	repeater()
}
repeat()


