document.addEventListener('DOMContentLoaded', function () {
    // Variables para el carrusel
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 7000; // ✅ Cambiar slide cada 7 segundos

    // Función para mostrar un slide específico
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Función para ir al slide anterior
    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // ✅ Iniciar el intervalo para cambiar slides automáticamente (con protección contra duplicados)
    function startSlideInterval() {
        clearInterval(slideInterval); // ✅ Evita múltiples intervalos activos
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Detener el intervalo cuando el usuario interactúa con el carrusel
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    // Botones de navegación
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startSlideInterval(); // reinicia el temporizador
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        startSlideInterval(); // reinicia el temporizador
    });

    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            startSlideInterval(); // reinicia el temporizador
        });
    });

    // Detener y reanudar al pasar el mouse
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopSlideInterval);
    carouselContainer.addEventListener('mouseleave', startSlideInterval);

    // Soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carouselContainer.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextSlide();
        } else if (touchEndX > touchStartX) {
            prevSlide();
        }
        startSlideInterval(); // reinicia el temporizador
    }

    // Navegación con teclado
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startSlideInterval();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startSlideInterval();
        }
    });

    // Iniciar carrusel al cargar
    showSlide(0);
    startSlideInterval(); // ✅ Empieza el intervalo de 7 segundos
});