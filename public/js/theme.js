document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const htmlElement = document.documentElement; // Target the <html> element

  // Function to set the theme based on the isDark boolean
  function setTheme(isDark) {
    if (isDark) {
      htmlElement.classList.add('dark-theme'); // Apply class to <html>
      themeSwitcher.checked = true; // Ensure checkbox reflects current state
      localStorage.setItem('theme', 'dark'); // Save preference
    } else {
      htmlElement.classList.remove('dark-theme'); // Remove class from <html>
      themeSwitcher.checked = false; // Ensure checkbox reflects current state
      localStorage.setItem('theme', 'light'); // Save preference
    }
  }

  // Check for saved theme preference on page load first
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    // If a theme is saved, apply it
    setTheme(savedTheme === 'dark');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference and apply dark theme if preferred
    setTheme(true);
  } else {
    // Default to light theme if no saved preference and system doesn't prefer dark
    setTheme(false);
  }

  // Listen for user interaction on the theme switcher checkbox
  themeSwitcher.addEventListener('change', () => {
    // Toggle theme based on checkbox checked state
    setTheme(themeSwitcher.checked);
  });
});