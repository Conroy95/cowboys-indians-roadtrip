// Laden routes.json en tonen overzicht met links naar dag.html?dag=#

async function loadRoutes() {
  const response = await fetch('routes.json');
  const dagen = await response.json();

  const dagList = document.getElementById('dagList');

  // Unieke dagen tonen (zonder duplicaten bij meerdere dagen op zelfde plaats)
  const uniqueDagen = [];

  // Omdat dag 2/3 samen zijn, tonen we dag per nummer, maar dag 2 en 3 apart.
  for (const dag of dagen) {
    uniqueDagen.push(dag);
  }

  uniqueDagen.forEach(dag => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="dag.html?dag=${dag.dag}">
        Dag ${dag.dag} - ${dag.datum} - ${dag.plaats}
      </a>
    `;
    dagList.appendChild(li);
  });
}

window.addEventListener('load', () => {
  loadRoutes();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
