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
 
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(wrapper => {
        const prevButton = wrapper.querySelector('.prev');
        const nextButton = wrapper.querySelector('.next');
        const carousel = wrapper.querySelector('.carousel');
        const windows = wrapper.querySelectorAll('.window');

        let currentIndex = 0; 
        const updateCarousel = () => {
            const width = windows[0].clientWidth; 
            carousel.style.transform = `translateX(-${currentIndex * width}px)`;
        };

        nextButton.addEventListener('click', () => {
            if (currentIndex < windows.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        window.addEventListener('resize', updateCarousel);
    });
});


// For carousel items: hover
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


