document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navOverlay = document.getElementById('nav-overlay');

  if (!menuToggle || !navbar || !navOverlay) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : !navbar.classList.contains('active');
    
    menuToggle.classList.toggle('active', isExpanded);
    navbar.classList.toggle('active', isExpanded);
    navOverlay.classList.toggle('active', isExpanded);

    // Prevent background scrolling when mobile menu is open
    document.body.style.overflow = isExpanded ? 'hidden' : '';
  }

  // Toggle drawer on button click
  menuToggle.addEventListener('click', () => toggleMenu());

  // Close drawer on overlay click
  navOverlay.addEventListener('click', () => toggleMenu(false));

  // Close drawer when pressing Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
      toggleMenu(false);
    }
  });

  // Automatically close drawer if screen expands past breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 920 && navbar.classList.contains('active')) {
      toggleMenu(false);
    }
  });
});