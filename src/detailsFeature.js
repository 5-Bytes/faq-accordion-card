let faqItems = document.querySelectorAll('.faq-item');
let infoItems = document.querySelectorAll('.faq-item__info');
let oldE=null;

const states = [
	"faq-item__summary--active",
	"faq-item__summary__arrow--active",
	"faq-item__info--disabled"
];
	
function details (e){
		if(oldE){
			if( oldE.target.parentElement.getAttribute('data-id') !== e.target.parentElement.getAttribute('data-id')){
			oldE.target.classList.remove(states[0])
			oldE.target.firstElementChild.classList.remove(states[1]);
			oldE.target.nextElementSibling.classList.add(states[2]);
			}
		}
		oldE = e;	
		e.target.classList.toggle(states[0])
		e.target.firstElementChild.classList.toggle(states[1]);
		e.target.nextElementSibling.classList.toggle(states[2]);
	}

Array.from(faqItems).forEach( (elem,index) => {
	elem.setAttribute('data-id',index);
	elem.addEventListener('click',details);
});