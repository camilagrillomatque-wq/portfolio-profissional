// Abre/fecha o menuzinho de contato no canto superior direito
const contato = document.querySelector('.contact');
if (contato) {
  const botao = contato.querySelector('.contact-toggle');
  botao.addEventListener('click', () => {
    const aberto = contato.classList.toggle('open');
    botao.setAttribute('aria-expanded', aberto);
  });
  document.addEventListener('click', e => {
    if (!contato.contains(e.target)) { contato.classList.remove('open'); botao.setAttribute('aria-expanded', 'false'); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { contato.classList.remove('open'); botao.setAttribute('aria-expanded', 'false'); }
  });
}
