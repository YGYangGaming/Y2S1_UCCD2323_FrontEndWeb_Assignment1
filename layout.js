$(document).ready(function() {
  // Load Shared Header
  $('#header-placeholder').load('header.html', function() {
    // Run navigation setup after the header elements exist in the DOM
    if (typeof initNav === 'function') {
      initNav();
    }
  });

  // Load Shared Footer
  $('#footer-placeholder').load('footer.html', function() {
    $('.social-btn').on('click', function(e) {
      e.preventDefault();
      const targetUrl = $(this).data('url');
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });
});