document.addEventListener('DOMContentLoaded', () => {
  fetch('routes.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('main-content');

      data.forEach((route, index) => {
        const link = document.createElement('a');
        link.href = `dag.html?dag=${encodeURIComponent(route.dag)}`;
        link.classList.add('card');

        link.innerHTML = `
          <img src="${route.foto}" alt="${route.plaats}" loading="lazy">
          <div class="card-content">
            <h2>Dag ${route.dag}</h2>
            <p><strong>Datum:</strong> ${route.datum}</p>
            <p><strong>Plaats:</strong> ${route.plaats}</p>
          </div>
        `;

        container.appendChild(link);
      });
    })
    .catch(err => console.error('Fout bij laden routes:', err));
});
