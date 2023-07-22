document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

// Seleccionar elementos de la barra de navegación y las secciones
const navbarItems = document.querySelectorAll('.nashe');
const sections = document.querySelectorAll('.insta');

// Función para agregar/retirar la clase "active" en la barra de navegación
let itemActual;
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
          itemActual = item; // Actualizamos el elemento actual en la variable global
        } else {
          item.classList.remove('active');
        }
      });
    }
  });
}
  
  // Listener para el evento scroll
window.addEventListener('scroll', updateNavbarActiveSection);

navbarItems.forEach((item, itemIndex) => {
  item.addEventListener('mouseover', () => {
    navbarItems.forEach((item, index) => {
      if (index === itemIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });

  item.addEventListener('mouseout', () => {
    navbarItems.forEach((item, index) => {
      if (index === itemIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    updateNavbarActiveSection(); // Llamamos a la función sin parámetros
  });
});
  
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    dropdownItems.forEach(item => {
      item.classList.remove('actual');
    });
    this.classList.add('actual');

    const valorActual = this.textContent.trim(); // Obtener el valor actual del elemento

    // Mostrar los elementos con la clase "ingles" y ocultar los demás
    if (valorActual === 'English') {
      document.querySelectorAll('.ingles').forEach(element => {
        element.style.display = 'block';
      });
      document.querySelectorAll('.espanol, .portugues').forEach(element => {
        element.style.display = 'none';
      });
    }
    // Mostrar los elementos con la clase "espanol" y ocultar los demás
    else if (valorActual === 'Spanish') {
      document.querySelectorAll('.espanol').forEach(element => {
        element.style.display = 'block';
      });
      document.querySelectorAll('.ingles, .portugues').forEach(element => {
        element.style.display = 'none';
      });
    }
    // Mostrar los elementos con la clase "portugues" y ocultar los demás
    else if (valorActual === 'Portuguese') {
      document.querySelectorAll('.portugues').forEach(element => {
        element.style.display = 'block';
      });
      document.querySelectorAll('.ingles, .espanol').forEach(element => {
        element.style.display = 'none';
      });
    }
  });
});

// Obtener los campos de entrada y las etiquetas
const emailInput = document.querySelector('.email input');
const textInput = document.querySelector('.text input');
const emailLabel = document.querySelector('.email label');
const textLabel = document.querySelector('.text label');

// Función para verificar si un campo tiene contenido y aplicar la clase correspondiente
function checkInput(input, label) {
  if (input.value !== '') {
    label.classList.add('active-label');
  } else {
    label.classList.remove('active-label');
  }
}

// Evento input para el campo de entrada de correo electrónico
emailInput.addEventListener('input', () => {
  checkInput(emailInput, emailLabel);
});

// Evento input para el campo de entrada de texto
textInput.addEventListener('input', () => {
  checkInput(textInput, textLabel);
});

// Evento click en el documento para eliminar la clase cuando se hace clic fuera del campo de entrada
document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement !== emailInput && clickedElement !== textInput) {
    checkInput(emailInput, emailLabel);
    checkInput(textInput, textLabel);
  }
});


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
