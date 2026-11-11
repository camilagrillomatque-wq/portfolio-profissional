// Ano automático no rodapé
document.querySelectorAll('[data-ano]').forEach(el => { el.textContent = new Date().getFullYear(); });
