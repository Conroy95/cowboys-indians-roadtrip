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
  1: [
    { titel: 'Aankomst in Denver', coords: { lat: 39.7392, lng: -104.9849 } },
    { titel: 'Hotel inchecken', coords: null },
    { titel: 'Wandeling in Union Station', coords: { lat: 39.7530, lng: -104.9969 } }
  ],
  2: [
    { titel: 'Rit naar Cheyenne', coords: { lat: 41.1400, lng: -104.8203 } },
    { titel: 'Bezoek State Capitol', coords: { lat: 41.1403, lng: -104.8202 } },
    { titel: 'Lunch bij The Albany', coords: { lat: 41.1358, lng: -104.8162 } }
  ],
  3: [
    { titel: 'Dagtocht naar Fort Laramie', coords: { lat: 42.1995, lng: -104.5241 } },
    { titel: 'Wandelen Curt Gowdy SP', coords: { lat: 41.3702, lng: -105.1898 } }
  ],
  4: [
    { titel: 'Aankomst Hot Springs', coords: { lat: 43.43165, lng: -103.47436 } },
    { titel: 'Bezoek Mammoth Site', coords: { lat: 43.4643, lng: -103.4575 } }
  ],
  5: [
    { titel: 'Rapid City centrum', coords: { lat: 44.0805, lng: -103.2310 } },
    { titel: 'Mount Rushmore', coords: { lat: 43.8791, lng: -103.4591 } }
  ],
  6: [
    { titel: 'Badlands NP verkennen', coords: { lat: 43.8554, lng: -102.3397 } }
  ],
  7: [
    { titel: 'Rit naar Billings', coords: { lat: 45.7833, lng: -108.5007 } },
    { titel: 'Pictograph Cave SP', coords: { lat: 45.7633, lng: -108.4766 } }
  ],
  8: [
    { titel: 'Aankomst Cody', coords: { lat: 44.52634, lng: -109.05653 } },
    { titel: 'Buffalo Bill Center', coords: { lat: 44.5266, lng: -109.0586 } }
  ],
  9: [
    { titel: 'Yellowstone South Loop starten', coords: { lat: 44.42369, lng: -110.58852 } }
  ],
  10: [
    { titel: 'Mammoth Hot Springs', coords: { lat: 44.9769, lng: -110.7013 } },
    { titel: 'Wildlife in Lamar Valley', coords: { lat: 44.8500, lng: -110.3000 } }
  ],
  11: [
    { titel: 'Canyon & waterpunten', coords: { lat: 44.7167, lng: -110.5000 } }
  ],
  12: [
    { titel: 'Jackson Hole centrum', coords: { lat: 43.4799, lng: -110.7624 } }
  ],
  13: [
    { titel: 'Grand Teton NP', coords: { lat: 43.7904, lng: -110.6818 } }
  ],
  14: [
    { titel: 'Rit naar Salt Lake City', coords: { lat: 40.7608, lng: -111.8910 } }
  ],
  15: [
    { titel: 'Temple Square', coords: { lat: 40.7700, lng: -111.8990 } }
  ],
  16: [
    { titel: 'Aankomst Moab', coords: { lat: 38.5733, lng: -109.5498 } }
  ],
  17: [
    { titel: 'Arches NP kort wandelen', coords: { lat: 38.7331, lng: -109.5925 } }
  ],
  18: [
    { titel: 'Rit terug naar Denver', coords: { lat: 39.7392, lng: -104.9849 } }
  ],
  19: [
    { titel: 'Denver Art Museum', coords: { lat: 39.7376, lng: -104.9920 } }
  ],
  20: [
    { titel: 'Vertrek naar vliegveld', coords: { lat: 39.8561, lng: -104.6737 } }
  ]
};

const infoPerDag = {
  1: "Vandaag kom je aan in Denver, Colorado. Haal je huurauto op en neem de tijd om bij te komen van de vlucht. Een korte wandeling in Downtown of een bezoek aan Union Station is ideaal.",
  2: "Vertrek richting Cheyenne, de hoofdstad van Wyoming. Bezoek het Wyoming State Capitol en ontdek de westerncultuur. Lunchtip: <a href='https://www.thealbany.com' target='_blank'>The Albany</a>.",
  3: "Trek eropuit voor een dagtocht naar Fort Laramie of wandel in het mooie Curt Gowdy State Park. Cheyenne heeft ook een mooi spoorwegmuseum.",
  4: "Vandaag rijd je naar Hot Springs, South Dakota. Bezoek de Mammoth Site, een unieke opgraving met honderden mammoetfossielen.",
  5: "Je komt aan in Rapid City, een gezellige stad met een historisch centrum. Bezoek eventueel het nabijgelegen Mount Rushmore of het Crazy Horse Memorial.",
  6: "Vandaag verken je Badlands National Park: surrealistische rotsformaties, prairiehonden en prachtige uitzichtpunten. Zorg voor voldoende water en zonnebrand.",
  7: "Een reisdag richting Billings, Montana. Onderweg kun je stoppen bij Wall Drug of het historische stadje Deadwood. In Billings is Pictograph Cave State Park een aanrader.",
  8: "Van Billings naar Cody, waar het wildwestgevoel centraal staat. Bezoek het Buffalo Bill Center of the West en maak eventueel een rodeo mee.",
  9: "Vandaag betreed je Yellowstone National Park: geisers, bizons en spectaculaire natuur. Begin met de zuidelijke loop van het park (Old Faithful, Grand Prismatic Spring).",
  10: "Vervolg je ontdekkingstocht door Yellowstone. De noordelijke regio heeft onder andere de Mammoth Hot Springs en volop wildlife.",
  11: "Laatste dag in Yellowstone. Breng eventueel een bezoek aan de Grand Canyon of the Yellowstone en neem rustig de tijd om van het park te genieten.",
  12: "Je rijdt vandaag naar Jackson Hole, een schilderachtig stadje in de bergen. Geniet van de galerijen, cowboy-bars en lokale sfeer.",
  13: "Verken Grand Teton National Park met zijn ruige bergtoppen en meren. Mooie wandelingen zijn onder andere Jenny Lake en Taggart Lake.",
  14: "Op weg naar Salt Lake City. Onderweg zie je het landschap langzaam veranderen. Salt Lake City biedt tempels, parken en goede restaurants.",
  15: "Verken Salt Lake City: bezoek Temple Square, het Utah State Capitol en wandel in het Liberty Park.",
  16: "Vertrek naar Moab, de poort tot Arches en Canyonlands National Park. De rit zelf is al indrukwekkend. Geniet van de zonsondergang bij Dead Horse Point.",
  17: "Vandaag volop genieten van Arches National Park: natuurlijke stenen bogen, rode rotsformaties en korte wandelingen.",
  18: "Rit terug richting Denver. Onderweg kun je eventueel stoppen in Glenwood Springs of Vail voor een korte pauze.",
  19: "Laatste volle dag in Denver. Bezoek het Denver Art Museum, relax in het City Park of ga shoppen in Cherry Creek.",
  20: "Terugvlucht naar Amsterdam. Lever de auto in en zorg dat je op tijd op het vliegveld bent. Goede reis!"
};

function getProgramma(dag) {
  return programmaPerDag[dag] || [];
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
  const trip = trips.find(t => t.dagen.includes(dagNum));
  if (!trip) {
    content.innerHTML = `<p>Dag niet gevonden.</p>`;
  } else {
    const dagText = trip.dagen.length > 1 ? `Dag ${trip.dagen.join(' / ')}` : `Dag ${trip.dagen[0]}`;
    const datumText = trip.datum.join(' / ');
    const programma = getProgramma(dagNum);
    const info = infoPerDag[dagNum] || 'Nog geen aanvullende informatie beschikbaar voor deze dag.';

    content.innerHTML = `
      <div class="dag-container">
        <h1>${dagText} - ${trip.plaats}</h1>
        <p><em>${datumText}</em></p>
        <img src="img/${trip.foto}" alt="${trip.plaats}" />
        <h2>Informatie</h2>
        <p class="dag-info" style="margin-bottom: 2em;">${info}</p>
        <h2>Programma</h2>
        <ul class="programma-list">
          ${programma.map(item => {
            if (typeof item === 'string') return `<li>${item}</li>`;
            const tekst = item.titel || '';
            const coords = item.coords;
            if (coords) {
              const { lat, lng } = coords;
              return `<li>${tekst} <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank">📍 (${lat.toFixed(4)}, ${lng.toFixed(4)})</a></li>`;
            }
            return `<li>📝 ${tekst}</li>`;
          }).join('')}
        </ul>
      </div>
    `;
  }
}

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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker geregistreerd'))
    .catch(err => console.log('Service Worker fout', err));
}
