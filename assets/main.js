// Ano automático no rodapé
document.querySelectorAll('[data-ano]').forEach(el => { el.textContent = new Date().getFullYear(); });

// Abre/fecha o submenu "trabalhos" no clique (útil no celular)
document.querySelectorAll('.has-sub > button').forEach(btn => {
  btn.addEventListener('click', () => {
    const li = btn.parentElement;
    const open = li.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', e => {
  document.querySelectorAll('.has-sub.open').forEach(li => {
    if (!li.contains(e.target)) { li.classList.remove('open'); li.querySelector('button').setAttribute('aria-expanded', 'false'); }
  });
});
