document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = menuBtn.querySelector('.hamburger');
  const close = menuBtn.querySelector('.close');
  const aboutBtn = document.getElementById('aboutBtn');
  const aboutDropdown = document.getElementById('aboutDropdown');
  const mobileAboutBtn = document.getElementById('mobileAboutBtn');
  const mobileAboutDropdown = document.getElementById('mobileAboutDropdown');

  // Desktop dropdown
  aboutBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    aboutDropdown.classList.toggle('hidden');
  });

  // Mobile dropdown
  mobileAboutBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileAboutDropdown.classList.toggle('hidden');
  });

  // Mobile menu toggle
  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
    document.body.classList.toggle('mobile-menu-open');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!aboutBtn.contains(e.target)) {
      aboutDropdown.classList.add('hidden');
    }
  });

  // Close mobile menu when clicking outside
  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
      mobileMenu.classList.add('hidden');
      hamburger.classList.remove('hidden');
      close.classList.add('hidden');
      document.body.classList.remove('mobile-menu-open');
      mobileAboutDropdown.classList.add('hidden');
    }
  });

  // Handle mobile menu links
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      hamburger.classList.remove('hidden');
      close.classList.add('hidden');
      document.body.classList.remove('mobile-menu-open');
    });
  });
});