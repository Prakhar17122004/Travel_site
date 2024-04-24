var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-320px";
      }
      else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    })

    document.getElementById('menu-icon').addEventListener('click', function() {
      document.getElementById('menu').classList.toggle('show');
  });
  

    let slideIndex = 0;

    function showSlides() {
      const slides = document.querySelectorAll('.box4');
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[slideIndex].style.display = 'block';
      slideIndex++;
      setTimeout(showSlides, 1350); // Change slide every 5 seconds
    }
  
    function moveSlide(n) {
      slideIndex += n;
      showSlides();
    }
  
    // Initial call to start the slideshow
    showSlides();

    