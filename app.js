document.addEventListener('DOMContentLoaded', () => {
  fetch('routes.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('trip-plan');
      data.forEach(day => {
        const item = document.createElement('li');
        item.innerText = `Dag ${day.day}: ${day.route}`;
        list.appendChild(item);
      });
    })
    .catch(err => {
      console.error('Fout bij laden van routes:', err);
      document.getElementById('trip-plan').innerText = "Route niet beschikbaar offline.";
    });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker actief'))
      .catch(err => console.error('SW error', err));
  }
});