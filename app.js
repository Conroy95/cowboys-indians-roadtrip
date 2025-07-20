let routesData = [];

function loadRoutes() {
  return fetch('routes.json')
    .then(response => response.json())
    .then(data => {
      routesData = data;
    });
}

function setNavbar(currentIndex = null) {
  const nav = document.getElementById('navbar');
  let html = `<a href="#/">🏠 Home</a>`;

  if (currentIndex !== null) {
    if (currentIndex > 1) {
      html += ` | <a href="#/dag/${currentIndex - 1}">⬅ Vorige</a>`;
    }
    if (currentIndex < routesData.length) {
      html += ` | <a href="#/dag/${currentIndex + 1}">Volgende ➡</a>`;
    }
  }

  nav.innerHTML = html;
}

function renderHome() {
  setNavbar(null);
  const app = document.getElementById('app');
  app.innerHTML = `<h2>Welkom bij de Roadtrip!</h2>`;
  routesData.forEach((day, index) => {
    app.innerHTML += `
      <div class="day-page">
        <h3><a href="#/dag/${index + 1}">Dag ${day.day} - ${day.place}</a></h3>
        <p>${day.date}</p>
        <img src="img/${day.photo}" alt="${day.place}">
      </div>
    `;
  });
}

function renderDayPage(index) {
  const app = document.getElementById('app');
  const day = routesData[index - 1];
  if (!day) {
    app.innerHTML = `<p>Dag niet gevonden.</p>`;
    setNavbar(null);
    return;
  }

  setNavbar(index);

  app.innerHTML = `
    <div class="day-page">
      <h2>Dag ${day.day} - ${day.place}</h2>
      <p><strong>Datum:</strong> ${day.date}</p>
      <img src="img/${day.photo}" alt="${day.place}">
      <p><a href="#/">⬅ Terug naar overzicht</a></p>
    </div>
  `;
}

function router() {
  const hash = window.location.hash || '#/';
  const match = hash.match(/^#\/dag\/(\d+)$/);

  if (hash === '#/' || !match) {
    renderHome();
  } else {
    const dayIndex = parseInt(match[1]);
    renderDayPage(dayIndex);
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  loadRoutes().then(router);
});

// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
