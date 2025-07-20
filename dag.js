// Haalt dagnummer uit URL, toont info, programma en navigatieknoppen

async function getDagNummer() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('dag'));
}

async function loadRoutes() {
  const response = await fetch('routes.json');
  return response.json();
}

function toonProgramma() {
  // Voorbeeld programma
  return [
    "Eerst eten",
    "Tanken",
    "Bezienswaardigheid bezoeken",
    "Naar hotel"
  ];
}

function updateNavigation(currentDag, maxDag) {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (currentDag <= 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    prevBtn.onclick = () => {
      window.location.href = `dag.html?dag=${currentDag - 1}`;
    };
  }

  if (currentDag >= maxDag) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    nextBtn.onclick = () => {
      window.location.href = `dag.html?dag=${currentDag + 1}`;
    };
  }
}

async function main() {
  const dagNummer = await getDagNummer();
  const routes = await loadRoutes();

  const dagData = routes.find(d => d.dag === dagNummer);

  if (!dagData) {
    document.body.innerHTML = "<p>Dag niet gevonden</p>";
    return;
  }

  document.getElementById('plaats').textContent = dagData.plaats;
  document.getElementById('datum').textContent = dagData.datum;

  const foto = document.getElementById('foto');
  foto.src = `img/${dagData.foto}`;
  foto.alt = `Foto van ${dagData.plaats}`;

  const programmaList = document.getElementById('programma');
  programmaList.innerHTML = '';
  toonProgramma().forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    programmaList.appendChild(li);
  });

  updateNavigation(dagNummer, routes.length);
}

window.addEventListener('load', main);
