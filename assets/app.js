    // Toggle menu for mobile
    const menuIcon = document.getElementById('menu-icon');
    const colorIcon = document.getElementById('color-icon');
    const navbar = document.querySelector('.navbar');
    const navbar2 = document.querySelector('.navbar2');
    
  // Fungsi konversi heksadesimal ke RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }

    // Function to close all menus
    function closeAllMenus() {
      navbar.classList.remove('active');
      navbar2.classList.remove('active');
      menuIcon.classList.remove('bx-x');
      colorIcon.classList.remove('bx-x');
    }
    
    // Menu icon click handler
    menuIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Toggle hamburger menu
      navbar.classList.toggle('active');
      
      // Close color picker if open
      if (navbar2.classList.contains('active')) {
        navbar2.classList.remove('active');
        colorIcon.classList.remove('bx-x');
      }
      
      // Toggle menu icon
      this.classList.toggle('bx-x');
    });
    
    // Color icon click handler
    colorIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Toggle color picker
      navbar2.classList.toggle('active');
      
      // Close hamburger menu if open
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
      }
      
      // Toggle color icon
      this.classList.toggle('bx-x');
    });
    
    // Close menus when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target) && !menuIcon.contains(e.target) &&
          !navbar2.contains(e.target) && !colorIcon.contains(e.target)) {
        closeAllMenus();
      }
    });
    
    // Color mode changer
    function color(newColor) {
      document.documentElement.style.setProperty('--main-color', newColor);
      
      // Konversi dan update nilai RGB
      const rgbValue = hexToRgb(newColor);
      document.documentElement.style.setProperty('--main-color-rgb', rgbValue);
      
      closeAllMenus();
    }
    
    // Sticky navbar
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      header.classList.toggle('shadow-md', window.scrollY > 0);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        // Close menus when clicking on nav links
        if (this.getAttribute('href') !== '#') {
          closeAllMenus();
        }
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Create animated background elements
    function createAnimatedBg() {
      const bg = document.getElementById('animated-bg');
      const colors = [
        'rgba(var(--main-color-rgb), 0.1)',
        'rgba(var(--main-color-rgb), 0.15)',
        'rgba(var(--main-color-rgb), 0.2)'
      ];
      
      for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        span.style.left = Math.random() * 100 + '%';
        span.style.top = Math.random() * 100 + '%';
        span.style.width = Math.random() * 30 + 10 + 'px';
        span.style.height = span.style.width;
        span.style.background = colors[Math.floor(Math.random() * colors.length)];
        span.style.animationDuration = Math.random() * 15 + 10 + 's';
        span.style.animationDelay = Math.random() * 5 + 's';
        span.style.opacity = Math.random() * 0.5 + 0.1;
        bg.appendChild(span);
      }
    }

    // Particle effect
    function createParticles() {
      const particlesContainer = document.querySelector('.particles');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 5;
        
        particle.style.setProperty('--random-x', Math.random() * 2 - 1);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = '0';
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
      }
    }

    // Fungsi baru untuk efek scroll
  function setupScrollEffects() {
    // Efek section saat muncul
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    // Sticky header dengan shadow
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('shadow');
      } else {
        header.classList.remove('shadow');
      }
    });
  }
    
    // Run on load
    window.addEventListener('load', () => {
      createParticles();
      
      // Add hover effect to service boxes
      document.querySelectorAll('.service-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
          box.classList.add('animate-shake');
        });
        
        box.addEventListener('animationend', () => {
          box.classList.remove('animate-shake');  
        });
      });
    });

    document.querySelectorAll('.skill-bar').forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      const progressBar = bar.querySelector('.skill-progress');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            progressBar.style.width = percent;
            observer.unobserve(entry.target); // Hanya sekali
          }
        });
      }, { threshold: 0.3 });

      observer.observe(bar);
    });

  // Panggil fungsi setupScrollEffects saat halaman dimuat
  document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupScrollEffects();
    createAnimatedBg();
    setupIntersectionObserver();
    setupScrollEffects();
  });
