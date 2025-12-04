const trips = [
  {dagen: [1], datum: ['27 Juni - 28 Juni'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [2], datum: ['28 Juni - 29 Juni'], plaats: 'Cheyenne', foto: 'cheyenne.png'},
  {dagen: [3], datum: ['29 Juni - 30 Juni'], plaats: 'Cheyenne', foto: 'cheyenne.png'},
  {dagen: [4], datum: ['30 Juni - 1 Juli'], plaats: 'Hot Springs', foto: 'hotsprings.png'},
  {dagen: [5], datum: ['1 Juli - 2 Juli'], plaats: 'Rapid City', foto: 'rapidcity.png'},
  {dagen: [6], datum: ['2 Juli - 3 Juli'], plaats: 'Badlands National Park', foto: 'badlands.png'},
  {dagen: [7], datum: ['3 Juli - 4 Juli'], plaats: 'Billings', foto: 'billings.png'},
  {dagen: [8], datum: ['4 Juli - 5 Juli'], plaats: 'Cody', foto: 'cody.png'},
  {dagen: [9], datum: ['5 Juli - 6 Juli'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [10], datum: ['6 Juli - 7 Juli'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [11], datum: ['7 Juli - 8 Juli'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [12], datum: ['8 Juli - 9 Juli'], plaats: 'Jackson Hole', foto: 'jacksonhole.png'},
  {dagen: [13], datum: ['9 Juli - 10 Juli'], plaats: 'Jackson Hole', foto: 'jacksonhole.png'},
  {dagen: [14], datum: ['10 Juli - 11 Juli'], plaats: 'Salt Lake City', foto: 'saltlakecity.png'},
  {dagen: [15], datum: ['11 Juli - 12 Juli'], plaats: 'Salt Lake City', foto: 'saltlakecity.png'},
  {dagen: [16], datum: ['12 Juli - 13 Juli'], plaats: 'Moab', foto: 'moab.png'},
  {dagen: [17], datum: ['13 Juli - 14 Juli'], plaats: 'Moab', foto: 'moab.png'},
  {dagen: [18], datum: ['14 Juli - 15 Juli'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [19], datum: ['15 Juli - 16 Juli'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [20], datum: ['16 Juli - 17 Juli'], plaats: 'Amsterdam', foto: 'amsterdam.png'},
  {dagen: [21], datum: ['17 Juli - 18 Juli'], plaats: 'Amsterdam', foto: 'amsterdam.png'},
];

// Toon alle dagen op homepage met foto, klikbaar naar dagpagina (bijv ?dag=1)
const gallery = document.getElementById('gallery');

trips.forEach((trip) => {
  const dayText = trip.dagen.length > 1 ? `Dag ${trip.dagen.join(' / ')}` : `Dag ${trip.dagen[0]}`;
  const dates = trip.datum.join(' / ');
  const div = document.createElement('div');
  div.classList.add('dag-preview');
  div.innerHTML = `
    <img src="img/${trip.foto}" alt="${trip.plaats}" loading="lazy" />
    <h3>${dayText} - ${trip.plaats}</h3>
    <p>${dates}</p>
  `;
  div.style.cursor = "pointer";
  div.addEventListener('click', () => {
    // Naar dag.html met dag eerste dag van trip
    location.href = `dag.html?dag=${trip.dagen[0]}`;
  });
  gallery.appendChild(div);
});

// Navigatieknoppen op homepage: alleen home (huidig), next dag=dag1 pagina, geen prev
const homeBtn = document.getElementById('homeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

homeBtn.disabled = true; // al op home

prevBtn.disabled = true; // geen prev op home

nextBtn.addEventListener('click', () => {
  location.href = 'dag.html?dag=1';
});

homeBtn.addEventListener('click', () => {
  location.href = 'index.html';
});

// Register service worker voor caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker geregistreerd'))
    .catch(err => console.log('Service Worker fout', err));
}



