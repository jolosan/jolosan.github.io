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

// Formulario de contacto → WhatsApp
// Al enviar, se abre WhatsApp (app o web) con un mensaje pre-rellenado
// con los datos del visitante, listo para que solo pulse "Enviar".

// TODO: sustituye este número por el tuyo, en formato internacional
// SIN el símbolo "+", sin espacios ni guiones. Ejemplo España: "34600123456"
const WHATSAPP_NUMBER = '+34711579381';

const OBJETIVO_LABELS = {
  '5k': '5K',
  '10k': '10K',
  'media': 'Media maratón',
  'maraton': 'Maratón'
};

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();


  let mensaje = `¡Hola Carlos! 🏃🏻‍♂️Quiero información sobre los planes de entrenamiento del S-Athletes Team. ¿Me envías más información?`;
  

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');

  contactForm.reset();
});

// Botón flotante de WhatsApp
// Usa el mismo número que el formulario, con un mensaje genérico
const whatsappFloat = document.getElementById('whatsappFloat');
const mensajeGenerico = '¡Hola Carlos! 🏃🏻‍♂️Quiero información sobre los planes de entrenamiento del S-Athletes Team. ¿Me envías más información?';
whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeGenerico)}`;


