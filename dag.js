function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

fetch('routes.json')
  .then(res => res.json())
  .then(data => {
    const id = parseInt(getQueryParam('id'));
    const dagData = data.find(d => d.id === id);
    const container = document.getElementById('dag-details');
    const nav = document.getElementById('dag-nav');

    if (dagData) {
      container.innerHTML = `
        <h1>Dag ${dagData.dag}</h1>
        <p><strong>Datum:</strong> ${dagData.datum}</p>
        <p><strong>Plaats:</strong> ${dagData.plaats}</p>
        <img src="${dagData.afbeelding}" alt="Afbeelding dag ${dagData.dag}" style="width:100%;max-width:600px;border-radius:8px;margin:1rem 0;">
        <p>${dagData.omschrijving}</p>
      `;

      // Vorige/volgende dag logica
      const currentIndex = data.findIndex(d => d.id === id);
      const prev = data[currentIndex - 1];
      const next = data[currentIndex + 1];

      nav.innerHTML = `
        ${prev ? `<a href="dag.html?id=${prev.id}">← Vorige dag</a>` : ''}
        ${next ? `<a href="dag.html?id=${next.id}">Volgende dag →</a>` : ''}
      `;
    } else {
      container.innerHTML = `<p>Dag niet gevonden.</p>`;
    }
  });