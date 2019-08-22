const selector = (id) => document.querySelector(`#${id}`);
const form = selector('form');
const msgSpan = selector('msg');

form.addEventListener('submit', (e) => {
  const messages = [];
  if (selector('delivery').value !== 'false' && selector('delivery').value !== 'true') {
    messages.push('The delivery filed should have a boolean value');
  }
  if (messages.length > 0) {
    e.preventDefault();
    msgSpan.textContent = messages.join(',');
  }
});
