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





const nama = document.querySelector('input[type=name]')
const email = document.querySelector('input[type=email]')
const phoneNo = document.querySelector('input[type=number]')
const submit = document.querySelector('input[type=submit]')
const area = document.querySelector('textarea[name=help]')



submit.addEventListener('click', (e) => {
	e.preventDefault()


	validationFrom()
}	
)


const setsucces = (element) => {
	const inputControl = element
	inputControl.classList.add('succes')
	inputControl.classList.remove('eror')

}	
const seteror = (element) => {
	const inputControl = element
	inputControl.classList.add('eror')
    inputControl.classList.remove('succes')

}	



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validationFrom = () =>{
	const valueNama = nama.value
	const valueEmail = email.value
	const valueNo = phoneNo.value
	const valueHelp = area.value 
	


	if(valueNama === '' || valueNama === null){
		seteror(nama)
		console.log('red nama')
	} else {
		setsucces(nama)
	}
	
	if(valueEmail === '' || !isValidEmail(valueEmail)){
		seteror(email)
		console.log('red email')
	} else {
		setsucces(email)
	}
	
	if(valueNo === '' || valueNo < 12){
		seteror(phoneNo)
	} else{
		setsucces(phoneNo)
	}

	if(valueHelp === '' || null){
		seteror(area)
	} else{
		setsucces(area)
	}

}

