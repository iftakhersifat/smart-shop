document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const msg = document.getElementById('contactMsg');

  if (!name || !email || !message) {
    msg.textContent = 'Please fill all fields.';
    msg.classList.remove('text-green-600');
    msg.classList.add('text-red-500');
    return;
  }

  msg.textContent = `Thank you, ${name}! Your message has been sent.`;
  msg.classList.remove('text-red-500');
  msg.classList.add('text-green-600');

  e.target.reset();
});
