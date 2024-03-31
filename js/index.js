// скрипт плавного появления секций
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated'); // Добавляем класс 'animated' при видимости
            observer.unobserve(entry.target);
        }
        });
    }, { threshold: 0.15 });
  
    sections.forEach(section => {
        observer.observe(section);
    });
  });
  // скрипт плавного появления секций
  document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('article');
  
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated'); // Добавляем класс 'animated' при видимости
          observer.unobserve(entry.target);
      }
      });
  }, { threshold: 0.15 });
  
  articles.forEach(article => {
      observer.observe(article);
  });
  });



// sticky header

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        if (window.scrollY > 5) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Swiper.js
    var swiper = new Swiper('.portfolio-swiper', {
        // Настройки направления свайпа
        direction: 'horizontal',
        
        // Количество видимых слайдов
        slidesPerView: 'auto',
        
        centeredSlides: true,

        spaceBetween: 0,

        // Отключение автоматической прокрутки
        autoplay: false,
        
        // Включение бесконечного цикла
        loop: false,

        initialSlide: 2,
        
        // Добавление кнопок навигации
        navigation: {
            nextEl: '.portfolio-slider-button-next',
            prevEl: '.portfolio-slider-button-prev',
        },
        
        // Добавление пагинации (если нужно)
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Делает пагинацию кликабельной
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            467: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
                initialSlide: 1,
            },
            991: {
                slidesPerView: 2,
                initialSlide: 2,
            },
            1920: {
                slidesPerView: 'auto',
            },
        }
        
        // Остальные настройки по вашему усмотрению
    });
});

