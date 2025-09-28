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
})
