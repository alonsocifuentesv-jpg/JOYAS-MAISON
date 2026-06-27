window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMobile() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function toggleFaq(btn) {
  btn.parentElement.classList.toggle('open');
}

function enviarWA(e) {
  e.preventDefault();
  const nombre = document.getElementById('f-nombre').value;
  const tel = document.getElementById('f-tel').value;
  const serv = document.getElementById('f-serv').value || 'No especificado';
  const msg = document.getElementById('f-msg').value;
  const txt = `Hola Dental Pacífico 👋\n\n*Nombre:* ${nombre}\n*Teléfono:* ${tel || 'No indicado'}\n*Servicio:* ${serv}\n*Mensaje:* ${msg || '—'}\n\n¡Quisiera reservar una hora!`;
  window.open('https://wa.me/56939665163?text=' + encodeURIComponent(txt), '_blank');
}
