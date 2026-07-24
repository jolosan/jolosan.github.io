// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Cierra el menú al pulsar un enlace (útil en móvil)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Formulario de contacto
// NOTA: esto es un placeholder. Para recibir los mensajes de verdad,
// conecta este formulario a un servicio como Formspree o Web3Forms
// (gratis para volumen bajo) sustituyendo el bloque de abajo por su
// snippet de integración, o cambia el <form> para que apunte a su endpoint.
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  console.log('Datos del formulario:', data);

  // Sustituir este alert por la llamada real al servicio de formularios
  alert('Gracias, ' + data.nombre + '. Te responderé en menos de 24h.');

  contactForm.reset();
});
