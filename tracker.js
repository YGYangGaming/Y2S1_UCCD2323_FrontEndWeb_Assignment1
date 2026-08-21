/**
 * Call this function on target pages to record the visit into JSON storage.
 */
function trackPageVisit(title, category) {
  const visitLog = {
    id: Date.now(),
    title: title || document.title,
    category: category || 'general',
    url: window.location.href,
    timestamp: new Date().toLocaleString()
  };

  // 1. Save to Local Storage (All-Time)
  const localHistory = JSON.parse(localStorage.getItem('apocalyptia_history')) || [];
  localHistory.unshift(visitLog); // Insert newest at beginning
  localStorage.setItem('apocalyptia_history', JSON.stringify(localHistory.slice(0, 50))); // Cap at 50

  // 2. Save to Session Storage (Current Session)
  const sessionHistory = JSON.parse(sessionStorage.getItem('apocalyptia_session_history')) || [];
  sessionHistory.unshift(visitLog);
  sessionStorage.setItem('apocalyptia_session_history', JSON.stringify(sessionHistory));
}