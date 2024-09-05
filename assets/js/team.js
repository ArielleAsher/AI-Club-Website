const teamContainers = document.querySelectorAll('.team-container');

teamContainers.forEach(container => {
    const teamMembers = container.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', ()=>{
            teamMembers.forEach(i=> i.classList.add('shrink'));
            member.classList.remove('shrink');
            member.classList.add('expand'); 
        })
    
        member.addEventListener('mouseout', ()=>{
            member.classList.remove('expand');
            teamMembers.forEach(i=> i.classList.remove('shrink'));
        })
    });
});

// carousel
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const windows = document.querySelectorAll('.window');

    let currentIndex = 0; // Start at the first set of windows

    // Function to update the carousel's position
    const updateCarousel = () => {
        const width = windows[0].clientWidth; // Get the width of one window
        carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    // Move to the next set of windows
    nextButton.addEventListener('click', () => {
        if (currentIndex < windows.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Move to the previous set of windows
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Adjust the carousel on window resize to ensure proper alignment
    window.addEventListener('resize', updateCarousel);
});

// For carousel items
const carouselContainer = document.querySelectorAll('.window');

carouselContainer.forEach(window => {
    const teamMembers = window.querySelectorAll('.carousel-item');
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', ()=>{
            teamMembers.forEach(i=> i.classList.add('shrink'));
            member.classList.remove('shrink');
            member.classList.add('expand'); 
        })
    
        member.addEventListener('mouseout', ()=>{
            member.classList.remove('expand');
            teamMembers.forEach(i=> i.classList.remove('shrink'));
        })
    });
});