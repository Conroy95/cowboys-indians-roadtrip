const trips = [
  {dagen: [1], datum: ['25 juli'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [2,3], datum: ['26 juli','27 juli'], plaats: 'Cheyenne', foto: 'cheyenne.png'},
  {dagen: [4], datum: ['28 juli'], plaats: 'Hot Springs', foto: 'hotsprings.png'},
  {dagen: [5], datum: ['29 juli'], plaats: 'Rapid City', foto: 'rapidcity.png'},
  {dagen: [6], datum: ['30 juli'], plaats: 'Badlands National Park', foto: 'badlands.png'},
  {dagen: [7], datum: ['31 juli'], plaats: 'Billings', foto: 'billings.png'},
  {dagen: [8], datum: ['1 augustus'], plaats: 'Cody', foto: 'cody.png'},
  {dagen: [9,10,11], datum: ['2 augustus','3 augustus','4 augustus'], plaats: 'Yellowstone National Park', foto: 'yellowstone.png'},
  {dagen: [12,13], datum: ['5 augustus','6 augustus'], plaats: 'Jackson Hole', foto: 'jacksonhole.png'},
  {dagen: [14,15], datum: ['7 augustus','8 augustus'], plaats: 'Salt Lake City', foto: 'saltlakecity.png'},
  {dagen: [16,17], datum: ['9 augustus','10 augustus'], plaats: 'Moab', foto: 'moab.png'},
  {dagen: [18,19], datum: ['11 augustus','12 augustus'], plaats: 'Denver', foto: 'denver.png'},
  {dagen: [20], datum: ['13 augustus'], plaats: 'Amsterdam', foto: 'amsterdam.png'},
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
