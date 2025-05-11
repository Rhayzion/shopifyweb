
        const carouselList = document.querySelector('.carousel-list');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.prev-arrow');
        const nextButton = document.querySelector('.next-arrow');
        const indicators = document.querySelectorAll('.indicator');
        const description = document.querySelector('.carousel-description');

        let currentIndex = 0;
        let intervalId;

        const descriptions = [
          "Description for Slide 1",
          "Description for Slide 2",
          "Description for Slide 3",
        ];

        function updateCarousel() {
            carouselList.style.transform = `translateX(${-currentIndex * 100}%)`;

             indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active-indicator', index === currentIndex);
            });
            description.textContent = descriptions[currentIndex];
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        }



        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        function startCarousel() {
           intervalId = setInterval(nextSlide, 3000);
        }

        function stopCarousel(){
            clearInterval(intervalId);
        }

        carouselList.addEventListener('mouseenter', stopCarousel);
        carouselList.addEventListener('mouseleave', startCarousel);

        startCarousel();
        updateCarousel();

