/*
Template Name: Appvilla - Creative Landing Page HTML Template.
Author: GrayGrids
*/

(function () {
    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        if (!header_navbar) return;
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img');
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          if (logo) logo.src = '/assets/images/logo/logo.svg';
        } else {
          header_navbar.classList.remove("sticky");
          if (logo) logo.src = '/assets/images/logo/white-logo.svg';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (!backToTo) return;
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };


    
    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    // WOW active
    new WOW().init();

    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    filterButtons.forEach(e =>
        e.addEventListener('click', () => {

            let filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });
    }

    //===== Features Slider
    const featuresSlider = document.querySelector('.features-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderDotsContainer = document.querySelector('.slider-dots');
    
    if (featuresSlider && prevBtn && nextBtn) {
        const featureCards = document.querySelectorAll('.feature-card');
        const cardWidth = featureCards[0].offsetWidth + 30; // card width + gap
        let currentIndex = 0;
        const totalCards = featureCards.length;
        
        // Calculate visible cards based on screen size
        function getVisibleCards() {
            if (window.innerWidth >= 1200) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }
        
        const visibleCards = getVisibleCards();
        const totalDots = Math.ceil(totalCards / visibleCards);
        
        // Create dots
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            sliderDotsContainer.appendChild(dot);
        }
        
        const dots = document.querySelectorAll('.slider-dot');
        
        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === Math.floor(currentIndex / visibleCards)) {
                    dot.classList.add('active');
                }
            });
        }
        
        function goToSlide(index) {
            currentIndex = index * visibleCards;
            if (currentIndex >= totalCards) {
                currentIndex = totalCards - visibleCards;
            }
            featuresSlider.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
            updateDots();
        }
        
        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - visibleCards);
            featuresSlider.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
            updateDots();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(totalCards - visibleCards, currentIndex + visibleCards);
            featuresSlider.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
            updateDots();
        });
        
        // Update on scroll
        featuresSlider.addEventListener('scroll', () => {
            const scrollLeft = featuresSlider.scrollLeft;
            currentIndex = Math.round(scrollLeft / cardWidth);
            updateDots();
        });
        
        // Touch/swipe support
        let startX = 0;
        let scrollLeft = 0;
        
        featuresSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - featuresSlider.offsetLeft;
            scrollLeft = featuresSlider.scrollLeft;
        });
        
        featuresSlider.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - featuresSlider.offsetLeft;
            const walk = (x - startX) * 2;
            featuresSlider.scrollLeft = scrollLeft - walk;
        });
    }

})();
