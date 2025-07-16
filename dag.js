function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

fetch('routes.json')
  .then(res => res.json())
  .then(data => {
    const dagParam = getQueryParam('dag');
    const dagData = data.find(item => item.dag === dagParam);
    const container = document.getElementById('dag-details');

    if (dagData) {
      container.innerHTML = `
        <h1>Dag ${dagData.dag}</h1>
        <p><strong>Datum:</strong> ${dagData.datum}</p>
        <p><strong>Plaats:</strong> ${dagData.plaats}</p>
        <p><strong>Omschrijving:</strong> ${dagData.omschrijving}</p>
      `;
    } else {
      container.innerHTML = `<p>Dag niet gevonden.</p>`;
    }
  });