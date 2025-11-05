document.getElementById('subscribeBtn').addEventListener('click', () => {
  const email = document.getElementById('newsletterEmail').value.trim();
  const msgEl = document.getElementById('newsletterMsg');

  if (!email || !email.includes('@')) {
    msgEl.textContent = 'Please enter a valid email.';
    msgEl.classList.remove('text-green-600');
    msgEl.classList.add('text-red-500');
    return;
  }

  msgEl.textContent = 'Thank you for subscribing!';
  msgEl.classList.remove('text-red-500');
  msgEl.classList.add('text-green-900');
  
  document.getElementById('newsletterEmail').value = '';
});
