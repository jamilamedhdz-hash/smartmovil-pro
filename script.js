‎document.addEventListener('DOMContentLoaded', () => {
‎  // Manejo del Modo Oscuro
‎  const themeToggle = document.getElementById('theme-toggle');
‎  const currentTheme = localStorage.getItem('theme') || 'light';
‎  
‎  if (currentTheme === 'dark') {
‎    document.documentElement.setAttribute('data-theme', 'dark');
‎    themeToggle.textContent = '☀️';
‎  } else {
‎    document.documentElement.setAttribute('data-theme', 'light');
‎    themeToggle.textContent = '🌙';
‎  }
‎
‎  themeToggle.addEventListener('click', () => {
‎    let theme = document.documentElement.getAttribute('data-theme');
‎    if (theme === 'dark') {
‎      document.documentElement.setAttribute('data-theme', 'light');
‎      localStorage.setItem('theme', 'light');
‎      themeToggle.textContent = '🌙';
‎    } else {
‎      document.documentElement.setAttribute('data-theme', 'dark');
‎      localStorage.setItem('theme', 'dark');
‎      themeToggle.textContent = '☀️';
‎    }
‎  });
‎
‎  // Menú Responsive para Móviles
‎  const menuToggle = document.getElementById('menu-toggle');
‎  const navLinks = document.getElementById('nav-links');
‎
‎  if (menuToggle && navLinks) {
‎    menuToggle.addEventListener('click', () => {
‎      navLinks.classList.toggle('active');
‎    });
‎  }
‎
‎  // Buscador interactivo básico
‎  const searchInput = document.getElementById('search-input');
‎  const searchBtn = document.getElementById('search-btn');
‎
‎  if (searchBtn && searchInput) {
‎    const handleSearch = () => {
‎      const query = searchInput.value.trim().toLowerCase();
‎      if (query) {
‎        alert('Buscando resultados para: "' + query + '".');
‎      }
‎    };
‎    searchBtn.addEventListener('click', handleSearch);
‎    searchInput.addEventListener('keypress', (e) => {
‎      if (e.key === 'Enter') handleSearch();
‎    });
‎  }
‎});
‎
