document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsNav = document.querySelector('.carousel-nav');
    
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    let autoSlideInterval;
    
    // Position slides side by side
    function setSlidePosition() {
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });
    }
    
    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            moveToSlide(index);
            resetAutoSlide();
        });
        dotsNav.appendChild(dot);
    });
    
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));
    
    // Move to a specific slide
    function moveToSlide(targetIndex) {
        if (targetIndex < 0) {
            targetIndex = slides.length - 1;
        } else if (targetIndex >= slides.length) {
            targetIndex = 0;
        }
        
        track.style.transform = `translateX(-${targetIndex * slideWidth}px)`;
        updateDots(targetIndex);
        currentIndex = targetIndex;
    }
    
    // Update active dot
    function updateDots(targetIndex) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === targetIndex);
        });
    }
    
    // Start auto sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, 5000);  // Change slide every 5 seconds
    }
    
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Event listeners
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
        resetAutoSlide();
    });
    
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
        resetAutoSlide();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        setSlidePosition();
        moveToSlide(currentIndex);
    });
    
    // Initialize
    setSlidePosition();
    startAutoSlide();
});


 // create dark theme

 const icon = document.getElementById("icon");
icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun-fill (2).svg";
    }
    else{
        icon.src = "images/moon-fill.svg";
    }
   
}
