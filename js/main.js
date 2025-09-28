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
})
