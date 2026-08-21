$(document).ready(function() {
  // Load Shared Header
  $('#header-placeholder').load('header.html', function() {
    if (typeof initNav === 'function') {
      initNav();
    }
  });

  // Load Shared Footer
  $('#footer-placeholder').load('footer.html', function() {
    fetchSocialLinks();
  });
});

// RESTful Fetch Call to retrieve social data
function fetchSocialLinks() {
  fetch('socials.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderSocialButtons(data);
    })
    .catch(error => {
      console.error('Error fetching social endpoints:', error);
    });
}

// Render dynamic social buttons to DOM
function renderSocialButtons(socials) {
  const container = $('#social-links-container');
  container.empty();

  socials.forEach(item => {
    const btn = $('<button>')
      .addClass('social-btn')
      .attr('data-url', item.url)
      .text(item.name);

    container.append(btn);
  });

  // Attach event handler after dynamic injection
  container.on('click', '.social-btn', function(e) {
    e.preventDefault();
    const targetUrl = $(this).attr('data-url');
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  });
}