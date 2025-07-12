async function loadRoute() {
  const response = await fetch('route.json');
  const route = await response.json();
  const list = document.getElementById('route-list');
  list.innerHTML = '';
  route.forEach(day => {
    const dayElem = document.createElement('div');
    dayElem.className = 'day';
    dayElem.textContent = `Dag ${day.day}: ${day.description}`;
    list.appendChild(dayElem);
  });
}

window.addEventListener('load', () => {
  loadRoute();
});
