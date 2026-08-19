$(document).ready(function() {
  // Load Shared Header
  $('#header-placeholder').load('header.html', function() {
    // Ensure wrapper acts as sticky block
    $(this).css({
        'position': 'sticky',
        'top': '0',
        'z-index': '1000'
    });

    // Run navigation setup
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