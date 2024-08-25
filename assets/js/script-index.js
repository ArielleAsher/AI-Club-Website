// Carousel JS

window.onload = function () {
    let slides = document.getElementsByClassName("carousel-item");
    function addActive(slide) {
      slide.classList.add("active");
    }
    function removeActive(slide) {
      slide.classList.remove("active");
    }
    addActive(slides[0]);
    setInterval(function () {
      for (let i = 0; i < slides.length; i++) {
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          setTimeout(removeActive, 350, slides[i]);
          break;
        }
        if (slides[i].classList.contains("active")) {
          setTimeout(removeActive, 350, slides[i]);
          addActive(slides[i + 1]);
          break;
        }
      }
    }, 2000);
  };
  
  // Core JS
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    const cards = document.querySelectorAll(".cores-card");
  
    cards.forEach((card) => {
      if (isElementInViewport(card)) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }
  
  // Attach an event listener for the scroll event
  window.addEventListener("scroll", handleScroll);
  
  // Initially check the elements in view on page load
  document.addEventListener("DOMContentLoaded", handleScroll);
  
  // FAQ
  
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((faqItem) => {
    const faqQuestion = faqItem.querySelector(".faq-question");
    faqQuestion.addEventListener("click", () => {
      faqItem.classList.toggle("active");
    });
  });

  