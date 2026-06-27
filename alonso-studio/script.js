const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cur.style.transform = `translate(${e.clientX - 6}px,${e.clientY - 6}px)`;
  ring.style.transform = `translate(${e.clientX - 18}px,${e.clientY - 18}px)`;
});

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

function seleccionarPlan(plan) {
  setTimeout(() => {
    const sel = document.getElementById('f-plan');
    if (!sel) return;
    for (let i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === plan) { sel.selectedIndex = i; break; }
    }
  }, 400);
}

function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function enviarFormulario() {
  const nombre = document.getElementById('f-nombre').value.trim();
  const negocio = document.getElementById('f-negocio').value.trim();
  const tipo = document.getElementById('f-tipo').value;
  const plan = document.getElementById('f-plan').value;
  const mensaje = document.getElementById('f-mensaje').value.trim();
  if (!nombre || !negocio || !tipo || !plan) {
    alert('Por favor completa todos los campos obligatorios.');
    return;
  }
  let txt = `Hola Alonso! 👋\n\nMe llamo *${nombre}* y tengo un negocio llamado *${negocio}* (${tipo}).\n\nMe interesa: *${plan}*`;
  if (mensaje) txt += `\n\nDetalles adicionales: ${mensaje}`;
  txt += `\n\nQuedo atento/a a tu respuesta 🙏`;
  window.open('https://wa.me/56939665163?text=' + encodeURIComponent(txt), '_blank');
}

const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.proj-card');
const dotsEl = document.getElementById('dots');
cards.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => { cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }); };
  dotsEl.appendChild(d);
});
const dotsList = dotsEl.querySelectorAll('.dot');
carousel.addEventListener('scroll', () => {
  const idx = Math.round(carousel.scrollLeft / (cards[0].offsetWidth + 24));
  dotsList.forEach((d, i) => d.classList.toggle('active', i === idx));
});
