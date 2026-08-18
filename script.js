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

// Formulario del ebook (Foam Roller) → Systeme.io vía /api/subscribe
const ebookForm = document.getElementById('ebookForm');

if (ebookForm) {
  const ebookStatus = document.getElementById('ebookStatus');
  const ebookSubmit = document.getElementById('ebookSubmit');
  const ebookEmail = document.getElementById('ebookEmail');
  const ebookConsent = document.getElementById('ebookConsent');

  ebookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = ebookEmail.value.trim();
    ebookStatus.textContent = '';
    ebookStatus.className = 'lead-magnet__status';

    if (!email || !email.includes('@')) {
      ebookStatus.textContent = 'Escribe un email válido.';
      ebookStatus.classList.add('is-error');
      return;
    }
    if (!ebookConsent.checked) {
      ebookStatus.textContent = 'Marca la casilla de consentimiento para continuar.';
      ebookStatus.classList.add('is-error');
      return;
    }

    ebookSubmit.disabled = true;
    ebookSubmit.textContent = 'Enviando...';

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('request-failed');

      ebookStatus.textContent = '¡Revisa tu email! Te acabamos de mandar el ebook.';
      ebookStatus.classList.add('is-success');
      ebookForm.reset();
    } catch (err) {
      ebookStatus.textContent = 'Algo falló, inténtalo de nuevo en unos segundos.';
      ebookStatus.classList.add('is-error');
    } finally {
      ebookSubmit.disabled = false;
      ebookSubmit.textContent = 'Envíamelo gratis';
    }
  });
}

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


