const trips = [
  {dagen: [1], datum: ['25 juli'], plaats: 'Denver', foto: 'denver.jpg'},
  {dagen: [2,3], datum: ['26 juli','27 juli'], plaats: 'Cheyenne', foto: 'cheyenne.jpg'},
  {dagen: [4], datum: ['28 juli'], plaats: 'Hot Springs', foto: 'hotsprings.jpg'},
  {dagen: [5], datum: ['29 juli'], plaats: 'Rapid City', foto: 'rapidcity.jpg'},
  {dagen: [6], datum: ['30 juli'], plaats: 'Badlands National Park', foto: 'badlands.jpg'},
  {dagen: [7], datum: ['31 juli'], plaats: 'Billings', foto: 'billings.jpg'},
  {dagen: [8], datum: ['1 augustus'], plaats: 'Cody', foto: 'cody.jpg'},
  {dagen: [9,10,11], datum: ['2 augustus','3 augustus','4 augustus'], plaats: 'Yellowstone National Park', foto: 'yellowstone.jpg'},
  {dagen: [12,13], datum: ['5 augustus','6 augustus'], plaats: 'Jackson Hole', foto: 'jacksonhole.jpg'},
  {dagen: [14,15], datum: ['7 augustus','8 augustus'], plaats: 'Salt Lake City', foto: 'saltlakecity.jpg'},
  {dagen: [16,17], datum: ['9 augustus','10 augustus'], plaats: 'Moab', foto: 'moab.jpg'},
  {dagen: [18,19], datum: ['11 augustus','12 augustus'], plaats: 'Denver', foto: 'denver.jpg'},
  {dagen: [20], datum: ['13 augustus'], plaats: 'Amsterdam', foto: 'amsterdam.jpg'},
];

// Simpel programma per dag
function getProgramma(dag) {
  // Voorbeeld programma, kan uitgebreid worden per dag
  return [
    'Eerst eten',
    'Tanken',
    'Bezienswaardigheid bezoeken',
    'Naar hotel',
  ];
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const dagNum = parseInt(getQueryParam('dag'));
const content = document.getElementById('content');

if (!dagNum || isNaN(dagNum)) {
  content.innerHTML = `<p>Ongeldige dag.</p>`;
} else {
  // Zoek trip waar deze dag in voorkomt
  const trip = trips.find(t => t.dagen.includes(dagNum));
  if (!trip) {
    content.innerHTML = `<p>Dag niet gevonden.</p>`;
  } else {
    const dagText = trip.dagen.length > 1 ? `Dag ${trip.dagen.join(' / ')}` : `Dag ${trip.dagen[0]}`;
    const datumText = trip.datum.join(' / ');
    const programma = getProgramma(dagNum);
    content.innerHTML = `
      <div class="dag-container">
        <h1>${dagText} - ${trip.plaats}</h1>
        <p><em>${datumText}</em></p>
        <img src="img/${trip.foto}" alt="${trip.plaats}" />
        <h2>Programma</h2>
        <ul class="programma-list">
          ${programma.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
}

// Navigatieknoppen functionaliteit

const homeBtn = document.getElementById('homeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

homeBtn.addEventListener('click', () => location.href = 'index.html');

const allDays = trips.flatMap(t => t.dagen).sort((a,b)=>a-b);

const currentIndex = allDays.indexOf(dagNum);

prevBtn.disabled = currentIndex <= 0;
nextBtn.disabled = currentIndex === allDays.length -1;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    location.href = `dag.html?dag=${allDays[currentIndex-1]}`;
  }
});
nextBtn.addEventListener('click', () => {
  if (currentIndex < allDays.length -1) {
    location.href = `dag.html?dag=${allDays[currentIndex+1]}`;
  }
});

// Service worker registration (indien niet al gedaan)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker geregistreerd'))
    .catch(err => console.log('Service Worker fout', err));
}
