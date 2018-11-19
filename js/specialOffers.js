let slideSpecialOffersIndex = 1,
	specialOffersSlides = document.getElementsByClassName('specialOffers-item'),
	specialOffersPrev = document.querySelector('.prev-s'),
	specialOffersNext = document.querySelector('.next-s'),
	specialOffersDotsWrap = document.querySelector('.specialOffers-dots'),
	specialOffersDots = document.getElementsByClassName('specialOffers-dot');
showSpecialOffersSlides(slideSpecialOffersIndex);

function showSpecialOffersSlides(index) {
	if (index > specialOffersSlides.length) {
		slideSpecialOffersIndex = 1;
	};
	if (index < 1) {
		slideSpecialOffersIndex = specialOffersSlides.length;
	};
	for (let i = 0; i < specialOffersSlides.length; i++) {
		specialOffersSlides[i].style.display = 'none';
	};
	for (let i = 0; i <specialOffersDots.length; i++) {
		specialOffersDots[i].classList.remove('specialOffers-dot-active')
	};
	specialOffersSlides[slideSpecialOffersIndex - 1].style.display = 'block';
	specialOffersDots[slideSpecialOffersIndex - 1].classList.add('specialOffers-dot-active');
}

function plusSpecialOffersSlides(index) {
	showSpecialOffersSlides(slideSpecialOffersIndex += index);
}

function currentSpecialOffersSlide (index) {
	showSpecialOffersSlides(slideSpecialOffersIndex = index);
}

specialOffersPrev.addEventListener('click', function() {
	plusSpecialOffersSlides(-1);
})

specialOffersNext.addEventListener('click', function() {
	plusSpecialOffersSlides(1);
})

specialOffersDotsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < specialOffersDots.length + 1; i++) {
		if (event.target.classList.contains('specialOffers-dot') && event.target == specialOffersDots[i-1]) {
			currentSpecialOffersSlide(i);
		}
	}
})