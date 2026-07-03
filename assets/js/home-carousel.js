(function () {
  const carousel = document.getElementById('homePhotoCarousel');
  if (!carousel || carousel.dataset.extendedCarousel === 'true') return;
  carousel.dataset.extendedCarousel = 'true';

  const change3Path = '/xyz_CHANGE/assets/img/news/change3.jpg';
  const existingChange3 = Array.from(carousel.querySelectorAll('img')).some(function (img) {
    return img.getAttribute('src') && img.getAttribute('src').indexOf('change3.jpg') !== -1;
  });

  if (!existingChange3) {
    const thirdPhoto = document.createElement('img');
    thirdPhoto.className = 'home-cover-photo';
    thirdPhoto.src = change3Path;
    thirdPhoto.alt = 'XYZ-CHANGE Group photo 3';
    carousel.appendChild(thirdPhoto);
  }

  const nativeScrollTo = carousel.scrollTo ? carousel.scrollTo.bind(carousel) : null;
  let allowManagedScroll = false;

  carousel.scrollTo = function (options) {
    if (!allowManagedScroll) return;
    if (nativeScrollTo) {
      nativeScrollTo(options);
    } else if (options && typeof options.left === 'number') {
      carousel.scrollLeft = options.left;
    }
  };

  const slides = carousel.querySelectorAll('.home-cover-photo');
  const prevButton = document.querySelector('.home-carousel-arrow-left');
  const nextButton = document.querySelector('.home-carousel-arrow-right');
  let index = 0;
  let timer = null;

  function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    allowManagedScroll = true;
    if (nativeScrollTo) {
      nativeScrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollLeft = slides[index].offsetLeft;
    }
    window.setTimeout(function () {
      allowManagedScroll = false;
    }, 120);
  }

  function startAutoPlay() {
    timer = window.setInterval(function () {
      showSlide(index + 1);
    }, 4000);
  }

  function resetAutoPlay() {
    if (timer) window.clearInterval(timer);
    startAutoPlay();
  }

  if (prevButton) {
    prevButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      showSlide(index - 1);
      resetAutoPlay();
    }, true);
  }

  if (nextButton) {
    nextButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      showSlide(index + 1);
      resetAutoPlay();
    }, true);
  }

  startAutoPlay();
})();
