  const searchContainer = 
document.getElementById('searchContainer');
  const searchBtn = 
document.getElementById('searchBtn');
  const searchInput = 
document.getElementById('searchInput');

  searchBtn.addEventListener('click', (event) => {

    event.stopPropagation();

  searchContainer.classList.toggle('active');

  if (searchContainer.classList.contains('active')) {
    searchInput.focus();
  } else {
    searchInput.value = '';
  }
  });
document.addEventListener('click', (event) => {
  if (!searchContainer.contains(event.target)) {
    searchContainer.classList.remove('active');
  }
});

/* ================================================

    DARK MODE TOGGLE

  ================================================= */

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.src = 'PNG/switch.png';
  } else {
    themeToggle.src = 'PNG/toggle.png';
  }