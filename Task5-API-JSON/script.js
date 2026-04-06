const fetchBtn = document.getElementById('fetch-btn');
const container = document.getElementById('user-container');
const loader = document.getElementById('loader');

// The Fetch function
async function getTeamData() {
  // 1. Show loader, clear old data
  loader.classList.remove('hidden');
  container.innerHTML = '';

  try {
    // 2. Fetch data from Public API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) throw new Error("Server communication failed");

    // 3. Parse JSON
    const users = await response.json();

    // 4. Update the DOM
    renderUsers(users);

  } catch (error) {
    container.innerHTML = `<p style="color:red">Error: ${error.message}</p>`;
  } finally {
    loader.classList.add('hidden');
  }
}

function renderUsers(users) {
  users.forEach(user => {
    // Create the card element
    const card = document.createElement('div');
    card.className = 'user-card';

    // Set the internal HTML using data from the JSON object
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>📧 Email:</strong> ${user.email}</p>
      <p><strong>🏢 Company:</strong> ${user.company.name}</p>
      <p><strong>📍 City:</strong> ${user.address.city}</p>
    `;

    // Add card to the container
    container.appendChild(card);
  });
}

fetchBtn.addEventListener('click', getTeamData);