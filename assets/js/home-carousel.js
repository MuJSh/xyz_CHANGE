(function () {
  const carousel = document.getElementById('homePhotoCarousel');
  if (!carousel || carousel.dataset.extendedCarousel === 'true') return;
  carousel.dataset.extendedCarousel = 'true';

  const extraPhotos = [
    { file: 'change3.jpg', alt: 'XYZ-CHANGE Group photo 3' },
    { file: 'change4.jpg', alt: 'XYZ-CHANGE Group photo 4' },
    { file: 'change5.jpg', alt: 'XYZ-CHANGE Group photo 5' }
  ];

  extraPhotos.forEach(function (photo) {
    const alreadyExists = Array.from(carousel.querySelectorAll('img')).some(function (img) {
      return img.getAttribute('src') && img.getAttribute('src').indexOf(photo.file) !== -1;
    });

    if (!alreadyExists) {
      const newPhoto = document.createElement('img');
      newPhoto.className = 'home-cover-photo';
      newPhoto.src = '/xyz_CHANGE/assets/img/news/' + photo.file;
      newPhoto.alt = photo.alt;
      carousel.appendChild(newPhoto);
    }
  });

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
