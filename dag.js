document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const dagParam = params.get('dag');

  fetch('routes.json')
    .then(res => res.json())
    .then(data => {
      const dagData = data.find(d => d.dag === dagParam);
      if (!dagData) {
        document.getElementById('main').innerHTML = '<p>Dag niet gevonden.</p>';
        return;
      }

      document.getElementById('dag-titel').textContent = `Dag ${dagData.dag}`;
      document.getElementById('dag-foto').src = dagData.foto;
      document.getElementById('dag-foto').alt = dagData.plaats;
      document.getElementById('dag-datum').textContent = dagData.datum;
      document.getElementById('dag-plaats').textContent = dagData.plaats;
    })
    .catch(err => console.error('Fout bij laden van daggegevens:', err));
});
