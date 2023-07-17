document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

// Seleccionar elementos de la barra de navegación y las secciones
const navbarItems = document.querySelectorAll('.nashe');
const sections = document.querySelectorAll('.insta');

// Función para agregar/retirar la clase "active" en la barra de navegación
function updateNavbarActiveSection() {
    const windowHeight = window.innerHeight;
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
  
      if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight >= windowHeight / 2) {
        navbarItems.forEach((item, itemIndex) => {
          if (itemIndex === index) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
}
  
  // Listener para el evento scroll
window.addEventListener('scroll', updateNavbarActiveSection);
  
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    dropdownItems.forEach(item => {
      item.classList.remove('actual');
    });
    this.classList.add('actual');
  });
});
