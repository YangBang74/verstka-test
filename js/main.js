// Custom JavaScript
document.addEventListener('DOMContentLoaded', function () {
  console.log('Page loaded successfully!')

  // Header functionality
  const searchToggle = document.getElementById('searchToggle')
  const menuToggle = document.getElementById('menuToggle')
  const searchDropdown = document.getElementById('searchDropdown')
  const menuDropdown = document.getElementById('menuDropdown')
  const searchClose = document.getElementById('searchClose')
  const searchInput = document.querySelector('.search-input')
  const searchBtn = document.querySelector('.search-btn')

  // Mobile menu functionality
  const mobileMenuToggle = document.getElementById('mobileMenuToggle')
  const mobileMenu = document.getElementById('mobileMenu')
  const mobileMenuClose = document.getElementById('mobileMenuClose')

  // Header scroll functionality
  const header = document.querySelector('.header')
  const logoImg = document.querySelector('.logo-img')
  const mobileLogoImg = document.querySelector('.header__mobile-logo-img')

  // Toggle search dropdown
  if (searchToggle) {
    searchToggle.addEventListener('click', function () {
      // Close menu if open
      if (menuDropdown.classList.contains('active')) {
        menuDropdown.classList.remove('active')
      }

      // Toggle search
      searchDropdown.classList.toggle('active')

      // Focus on search input when opened
      if (searchDropdown.classList.contains('active')) {
        setTimeout(() => {
          searchInput.focus()
        }, 100)
      }
    })
  }

  // Toggle menu dropdown
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      // Close search if open
      if (searchDropdown.classList.contains('active')) {
        searchDropdown.classList.remove('active')
      }

      // Toggle menu
      menuDropdown.classList.toggle('active')
    })
  }

  // Close search dropdown
  if (searchClose) {
    searchClose.addEventListener('click', function () {
      searchDropdown.classList.remove('active')
    })
  }

  // Toggle mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      if (mobileMenu.classList.contains('active')) {
        // Закрываем меню
        mobileMenu.classList.remove('active')
        mobileMenuToggle.classList.remove('active')
        document.body.style.overflow = ''
      } else {
        // Открываем меню
        mobileMenu.classList.add('active')
        mobileMenuToggle.classList.add('active')
        document.body.style.overflow = 'hidden'
      }
    })
  }

  // Close mobile menu (если есть отдельная кнопка закрытия)
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function () {
      mobileMenu.classList.remove('active')
      mobileMenuToggle.classList.remove('active')
      document.body.style.overflow = ''
    })
  }

  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active')
        mobileMenuToggle.classList.remove('active')
        document.body.style.overflow = ''
      }
    })
  }

  // Header scroll effect
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 30) {
      header.classList.add('scrolled')
      console.log('Scrolled - changing to logo-2')
      // Меняем логотип на logo-2 для десктопной версии
      if (logoImg) {
        logoImg.src = 'assets/images/logo-2.svg'
        logoImg.onerror = function () {
          console.error('Failed to load logo-2.svg for desktop')
        }
        logoImg.onload = function () {
          console.log('Desktop logo-2.svg loaded successfully')
        }
        console.log('Desktop logo changed to logo-2')
      }
      // Меняем логотип на logo-2 для мобильной версии
      if (mobileLogoImg) {
        mobileLogoImg.src = 'assets/images/logo-2.svg'
        mobileLogoImg.onerror = function () {
          console.error('Failed to load logo-2.svg for mobile')
        }
        mobileLogoImg.onload = function () {
          console.log('Mobile logo-2.svg loaded successfully')
        }
        console.log('Mobile logo changed to logo-2')
      }
    } else {
      header.classList.remove('scrolled')
      console.log('Not scrolled - changing to logo')
      // Возвращаем оригинальный логотип для десктопной версии
      if (logoImg) {
        logoImg.src = 'assets/images/logo.svg'
        logoImg.onerror = function () {
          console.error('Failed to load logo.svg for desktop')
        }
        logoImg.onload = function () {
          console.log('Desktop logo.svg loaded successfully')
        }
        console.log('Desktop logo changed to logo')
      }
      // Возвращаем оригинальный логотип для мобильной версии
      if (mobileLogoImg) {
        mobileLogoImg.src = 'assets/images/logo.svg'
        mobileLogoImg.onerror = function () {
          console.error('Failed to load logo.svg for mobile')
        }
        mobileLogoImg.onload = function () {
          console.log('Mobile logo.svg loaded successfully')
        }
        console.log('Mobile logo changed to logo')
      }
    }
  }

  // Добавляем обработчик скролла только если header существует
  if (header) {
    window.addEventListener('scroll', handleScroll)
    console.log('Scroll handler added')

    // Проверяем начальное состояние
    console.log('Initial scroll position:', window.pageYOffset)
    handleScroll()
  } else {
    console.log('Header not found')
  }

  // Search functionality
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      const query = searchInput.value.trim()
      if (query) {
        // Here you can implement actual search functionality
        console.log('Searching for:', query)
        // For now, just show an alert
        alert('Поиск по запросу: ' + query)
      }
    })
  }

  // Search on Enter key
  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim()
        if (query) {
          console.log('Searching for:', query)
          alert('Поиск по запросу: ' + query)
        }
      }
    })
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    const isSearchToggle = searchToggle && searchToggle.contains(e.target)
    const isMenuToggle = menuToggle && menuToggle.contains(e.target)
    const isSearchDropdown = searchDropdown && searchDropdown.contains(e.target)
    const isMenuDropdown = menuDropdown && menuDropdown.contains(e.target)

    if (!isSearchToggle && !isSearchDropdown && searchDropdown) {
      searchDropdown.classList.remove('active')
    }

    if (!isMenuToggle && !isMenuDropdown && menuDropdown) {
      menuDropdown.classList.remove('active')
    }
  })

  // Close dropdowns on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (searchDropdown) {
        searchDropdown.classList.remove('active')
      }
      if (menuDropdown) {
        menuDropdown.classList.remove('active')
      }
    }
  })

  // Menu buttons functionality (inside dropdown)
  const menuSearchToggle = document.getElementById('menuSearchToggle')
  const menuMenuToggle = document.getElementById('menuMenuToggle')

  // First button: close menu and open search
  if (menuSearchToggle) {
    menuSearchToggle.addEventListener('click', function () {
      // Close menu
      if (menuDropdown.classList.contains('active')) {
        menuDropdown.classList.remove('active')
      }

      // Open search
      searchDropdown.classList.add('active')

      // Focus on search input
      setTimeout(() => {
        if (searchInput) {
          searchInput.focus()
        }
      }, 100)
    })
  }

  // Second button: just close menu
  if (menuMenuToggle) {
    menuMenuToggle.addEventListener('click', function () {
      // Close menu
      if (menuDropdown.classList.contains('active')) {
        menuDropdown.classList.remove('active')
      }
    })
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })

  // Add loading animation for search
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      this.style.opacity = '0.6'
      setTimeout(() => {
        this.style.opacity = '1'
      }, 1000)
    })
  }

  // Hero button functionality
  const heroBtn = document.querySelector('.btn-hero')
  if (heroBtn) {
    heroBtn.addEventListener('click', function () {
      // Here you can add functionality for consultation request
      console.log('Consultation requested')
      // For now, show an alert
      alert('Спасибо за интерес! Мы свяжемся с вами в ближайшее время.')
    })
  }

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg-image')
  if (heroBg) {
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      heroBg.style.transform = `translateY(${rate}px)`
    })
  }

  // About section button functionality
  const aboutBtn = document.querySelector('.btn-about')
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function () {
      // Here you can add functionality for downloading presentation
      console.log('Presentation download requested')
      // For now, show an alert
      alert('Презентация будет загружена. Спасибо за интерес!')
    })
  }

  // Animate statistics on scroll
  const statNumbers = document.querySelectorAll('.stat-number')
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const finalNumber = parseInt(target.textContent)
        animateNumber(target, 0, finalNumber, 2000)
        observer.unobserve(target)
      }
    })
  }, observerOptions)

  statNumbers.forEach((number) => {
    observer.observe(number)
  })

  function animateNumber(element, start, end, duration) {
    const startTime = performance.now()

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentNumber = Math.floor(start + (end - start) * progress)
      element.textContent = currentNumber

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }

  // Services Slider
  const servicesSlider = document.querySelector('.services__slider')
  if (servicesSlider) {
    const swiper = new Swiper('.services__slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.services__nav-btn--next',
        prevEl: '.services__nav-btn--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    })

    // Service card links functionality
    const serviceLinks = document.querySelectorAll('.service-card__link')
    serviceLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        const serviceTitle =
          this.closest('.service-card').querySelector('.service-card__title').textContent
        console.log('Service selected:', serviceTitle)
        alert(`Вы выбрали услугу: ${serviceTitle}`)
      })
    })

    // Services more button functionality
    const servicesMoreBtn = document.querySelector('.services__more-btn')
    if (servicesMoreBtn) {
      servicesMoreBtn.addEventListener('click', function () {
        console.log('Learn more about services clicked')
        alert('Переход к подробной информации об услугах')
      })
    }

    // Why choose us button functionality
    const whyChooseBtn = document.querySelector('.why-choose__btn')
    if (whyChooseBtn) {
      whyChooseBtn.addEventListener('click', function () {
        console.log('Why choose us button clicked')
        alert('Переход к подробной информации о преимуществах')
      })
    }

    // Geography Slider
    const geographySlider = document.querySelector('.geography__slider')
    if (geographySlider) {
      const swiper = new Swiper('.geography__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.geography__nav-btn--next',
          prevEl: '.geography__nav-btn--prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      })
    }

    // Geography more button functionality
    const geographyMoreBtn = document.querySelector('.geography__more-btn')
    if (geographyMoreBtn) {
      geographyMoreBtn.addEventListener('click', function () {
        console.log('Geography more button clicked')
        alert('Переход к подробной информации о географии строительства')
      })
    }
  }
})
