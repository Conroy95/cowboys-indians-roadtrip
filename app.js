fetch('routes.json')
  .then(res => res.json())
  .then(data => renderRoute(data));

function renderRoute(routeData) {
  const container = document.getElementById('route-container');
  routeData.forEach(day => {
    const div = document.createElement('div');
    div.className = 'route-day';
    div.innerHTML = `
      <h2>Dag ${day.dag}</h2>
      <p><strong>Datum:</strong> ${day.datum}</p>
      <p><strong>Plaats:</strong> ${day.plaats}</p>
    `;
    container.appendChild(div);
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}