const trips = [
  {dagen: [1], datum: ['25 juli'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [2], datum: ['26 juli'], plaats: 'Cheyenne', foto: 'cheyenne.png'},
  {dagen: [3], datum: ['27 juli'], plaats: 'Cheyenne', foto: 'cheyenne.png'},
  {dagen: [4], datum: ['28 juli'], plaats: 'Hot Springs', foto: 'hotsprings.png'},
  {dagen: [5], datum: ['29 juli'], plaats: 'Rapid City', foto: 'rapidcity.png'},
  {dagen: [6], datum: ['30 juli'], plaats: 'Badlands National Park', foto: 'badlands.png'},
  {dagen: [7], datum: ['31 juli'], plaats: 'Billings', foto: 'billings.png'},
  {dagen: [8], datum: ['1 augustus'], plaats: 'Cody', foto: 'cody.png'},
  {dagen: [9], datum: ['2 augustus'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [10], datum: ['3 augustus'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [11], datum: ['4 augustus'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [12], datum: ['5 augustus'], plaats: 'Jackson Hole', foto: 'jacksonhole.png'},
  {dagen: [13], datum: ['6 augustus'], plaats: 'Jackson Hole', foto: 'jacksonhole.png'},
  {dagen: [14], datum: ['7 augustus'], plaats: 'Salt Lake City', foto: 'saltlakecity.png'},
  {dagen: [15], datum: ['8 augustus'], plaats: 'Salt Lake City', foto: 'saltlakecity.png'},
  {dagen: [16], datum: ['9 augustus'], plaats: 'Moab', foto: 'moab.png'},
  {dagen: [17], datum: ['10 augustus'], plaats: 'Moab', foto: 'moab.png'},
  {dagen: [18], datum: ['11 augustus'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [19], datum: ['12 augustus'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [20], datum: ['13 augustus'], plaats: 'Amsterdam', foto: 'amsterdam.png'},
];

const programmaPerDag = {
  1: ['Aankomst in Denver', 'Huurauto ophalen', 'Hotel inchecken', 'Dinner in downtown'],
  2: ['Rit naar Cheyenne', 'Bezoek State Capitol', 'Lunch bij The Albany', 'Cowboy Boots Statues', 'Overnachting'],
  3: ['Dagtocht naar Fort Laramie', 'Wandelen in Curt Gowdy State Park'],
  4: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  5: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  6: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  7: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  8: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  9: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  10: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  11: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  12: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  13: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  14: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  15: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  16: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  17: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  18: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  19: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  20: ['Vertrek naar Amsterdam']
};

const listPerDag = {
  1: ['Aankomst in Denver', 'Huurauto ophalen', 'Hotel inchecken', 'Dinner in downtown'],
  2: ['Rit naar Cheyenne', 'Bezoek State Capitol', 'Lunch bij The Albany', 'Cowboy Boots Statues', 'Overnachting'],
  3: ['Dagtocht naar Fort Laramie', 'Wandelen in Curt Gowdy State Park'],
  4: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  5: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  6: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  7: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  8: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  9: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  10: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  11: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  12: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  13: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  14: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  15: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  16: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  17: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  18: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  19: ['Vertrek naar Hot Springs', 'Bezoek Mammoth Site', 'Avondwandeling'],
  20: ['Vertrek naar Amsterdam']
};

// Simpel programma per dag
function getProgramma(dag) {
  return programmaPerDag[dag] || ['Programma nog niet ingevoerd voor deze dag.'];
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
        <h2>Info</h2>
        <ul class="info-list">
          ${programma.map(item => `<li>${item}</li>`).join('')}
        </ul>
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
