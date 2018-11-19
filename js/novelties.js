let slideNoveltiesIndex = 1,
	noveltiesSlides = document.getElementsByClassName('novelties-item'),
	noveltiesPrev = document.querySelector('.prev-n'),
	noveltiesNext = document.querySelector('.next-n'),
	noveltiesDotsWrap = document.querySelector('.novelties-dots'),
	noveltiesDots = document.getElementsByClassName('novelties-dot');
showNoveltiesSlides(slideNoveltiesIndex);

function showNoveltiesSlides(index) {
	if (index > noveltiesSlides.length) {
		slideNoveltiesIndex = 1;
	};
	if (index < 1) {
		slideNoveltiesIndex = noveltiesSlides.length;
	};
	for (let i = 0; i < noveltiesSlides.length; i++) {
		noveltiesSlides[i].style.display = 'none';
	};
	for (let i = 0; i <noveltiesDots.length; i++) {
		noveltiesDots[i].classList.remove('novelties-dot-active')
	};
	noveltiesSlides[slideNoveltiesIndex - 1].style.display = 'block';
	noveltiesDots[slideNoveltiesIndex - 1].classList.add('novelties-dot-active');
}

function plusNoveltiesSlides(index) {
	showNoveltiesSlides(slideNoveltiesIndex += index);
}

function currentNoveltiesSlide (index) {
	showNoveltiesSlides(slideNoveltiesIndex = index);
}

noveltiesPrev.addEventListener('click', function() {
	plusNoveltiesSlides(-1);
})

noveltiesNext.addEventListener('click', function() {
	plusNoveltiesSlides(1);
})

noveltiesDotsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < noveltiesDots.length + 1; i++) {
		if (event.target.classList.contains('novelties-dot') && event.target == noveltiesDots[i-1]) {
			currentSlide(i);
		}
	}
})