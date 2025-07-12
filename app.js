async function loadRoute() {
  const response = await fetch('route.json');
  const route = await response.json();
  const list = document.getElementById('route-list');
  list.innerHTML = '';

  route.forEach(day => {
    const dayElem = document.createElement('div');
    dayElem.className = 'day';

    // Titel dag (klikbaar)
    const title = document.createElement('h2');
    title.textContent = `Dag ${day.day}: ${day.title}`;
    title.style.cursor = 'pointer';
    dayElem.appendChild(title);

    // Programma details, initieel verborgen
    const details = document.createElement('ul');
    details.style.display = 'none';
    details.style.marginTop = '0.5rem';

    day.program.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      details.appendChild(li);
    });

    dayElem.appendChild(details);

    // Klik event toggle
    title.addEventListener('click', () => {
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });

    list.appendChild(dayElem);
  });
}

window.addEventListener('load', () => {
  loadRoute();
});
