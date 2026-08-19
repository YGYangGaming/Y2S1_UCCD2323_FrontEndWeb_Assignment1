$(document).ready(function() {
  // Load footer content from footer.html
  $('#footer-placeholder').load('footer.html', function() {

    // Bind social button click handler after footer loads
    $('.social-btn').on('click', function(e) {
      e.preventDefault();
      const targetUrl = $(this).data('url');
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });

  });
});