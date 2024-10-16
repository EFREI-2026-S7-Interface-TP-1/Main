document.addEventListener('DOMContentLoaded', function () {
	// Fonctionnalité de basculement du menu
	const menuToggle = document.querySelector('.menu-toggle');
	const navLinks = document.querySelector('.nav-links');
	const userLinks = document.querySelector('.user-links');

	menuToggle.addEventListener('click', function () {
		navLinks.classList.toggle('active');
		userLinks.classList.toggle('active');
	});

	// Fonctionnalité du carousel
	const carouselData = [
		{
			imageUrl: 'public/images/sciences.jpg',
			title: 'Breaking News: Major Scientific Discovery',
			description: 'Scientists announce a groundbreaking discovery that could revolutionize our understanding of the universe.'
		},
		{
			imageUrl: 'public/images/tech.jpg',
			title: 'Tech Giant Unveils New Product Line',
			description: 'A leading tech company reveals its latest innovations, set to hit the market next month.'
		}
	];

	const carousel = document.querySelector('.carousel');
	const carouselContainer = carousel.querySelector('.carousel-container');
	const prevButton = carousel.querySelector('.prev');
	const nextButton = carousel.querySelector('.next');
	const indicators = carousel.querySelector('.carousel-indicators');
	let currentSlide = 0;

	function createCarouselItem(item) {
		const div = document.createElement('div');
		div.className = 'carousel-item';
		div.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="carousel-caption">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
		return div;
	}

	function createIndicator(index) {
		const indicator = document.createElement('div');
		indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
		indicator.addEventListener('click', () => goToSlide(index));
		return indicator;
	}

	function updateIndicators() {
		const indicatorElements = indicators.querySelectorAll('.carousel-indicator');
		indicatorElements.forEach((indicator, index) => {
			indicator.classList.toggle('active', index === currentSlide);
		});
	}

	function goToSlide(index) {
		currentSlide = index;
		carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
		updateIndicators();
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % carouselData.length;
		goToSlide(currentSlide);
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length;
		goToSlide(currentSlide);
	}

	carouselData.forEach((item, index) => {
		carouselContainer.appendChild(createCarouselItem(item));
		indicators.appendChild(createIndicator(index));
	});

	prevButton.addEventListener('click', prevSlide);
	nextButton.addEventListener('click', nextSlide);

	// Défilement automatique du carousel
	setInterval(nextSlide, 5000);
});
