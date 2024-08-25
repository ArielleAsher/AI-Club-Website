document.querySelectorAll('.pecard-wrap').forEach(function (pecardWrap) {
    const pecard = pecardWrap.querySelector('.pecard');
    // console.log('pecard Element:', pecard);
    // const imageUrl = pecard.getAttribute('data-image');
    // console.log('pecard Attributes:', pecard.attributes);
    // console.log(pecard.getAttribute('data-image'));
    
    
    
    let width = pecard.offsetWidth;
    let height = pecard.offsetHeight;

    pecardWrap.addEventListener('mousemove', function (e) {
        const mouseX = e.pageX - pecardWrap.offsetLeft - width / 2;
        const mouseY = e.pageY - pecardWrap.offsetTop - height / 2;
        const rX = (mouseX / width) * 30;
        const rY = (mouseY / height) * -30;

        pecard.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
    });

    pecardWrap.addEventListener('mouseleave', function () {
        setTimeout(function () {
            pecard.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }, 1000);
    });
});


(function() {
    $(document).ready(function() {
      var slideContainer = $('.slide-container');
      
      slideContainer.slick();
      
      $('.uecard-image img').hide();
      $('.slick-active').find('.uecard img').fadeIn(200);
      
      slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.uecard img').fadeOut(1000);
      });
      
      slideContainer.on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').find('.uecard img').fadeIn(200);
      });
    });
  })();
  

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  // console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      // console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});