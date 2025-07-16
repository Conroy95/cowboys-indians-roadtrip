fetch('routes.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('trip-container');
    data.forEach(day => {
      const dayCard = document.createElement('div');
      dayCard.className = 'trip-day';
      dayCard.innerHTML = `
        <img src="img/${day.foto}" alt="${day.plaats}">
        <div class="info">
          <h2>Dag ${day.dag}</h2>
          <p><strong>Datum:</strong> ${day.datum}</p>
          <p><strong>Plaats:</strong> ${day.plaats}</p>
        </div>
      `;
      container.appendChild(dayCard);
    });
  });
