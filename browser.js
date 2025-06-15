const form = document.getElementById('guest-form');
const guestList = document.getElementById('guest-list');
const nameInput = document.getElementById('guest-name');
const categoryInput = document.getElementById('guest-category');

let guests = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (guests.length >= 10) {
    alert("Only 10 guests allowed!");
    return;
  }

  const name = nameInput.value.trim();
  const category = categoryInput.value;

  if (name === "") return;

  const guest = {
    id: Date.now(),
    name: name,
    category: category,
    attending: false,
    time: new Date().toLocaleTimeString()
  };

  guests.push(guest);
  renderGuests();

  form.reset();
});

function renderGuests() {
  guestList.innerHTML = "";

  guests.forEach((guest) => {
    const li = document.createElement('li');
    li.className = `guest-item ${guest.category.toLowerCase()}`;

    li.innerHTML = `
      <strong>${guest.name}</strong> (${guest.category}) <br />
      <span class="timestamp">Added at: ${guest.time}</span><br />
      <span>Status: ${guest.attending ? "Attending" : "Not Attending"}</span><br/>
      <button onclick="toggleRSVP(${guest.id})">Toggle RSVP</button>
      <button onclick="editGuest(${guest.id})">Edit</button>
      <button onclick="removeGuest(${guest.id})">Remove</button>
    `;

    guestList.appendChild(li);
  });
}

function toggleRSVP(id) {
  guests = guests.map(g => g.id === id ? { ...g, attending: !g.attending } : g);
  renderGuests();
}

function editGuest(id) {
  const guest = guests.find(g => g.id === id);
  const newName = prompt("Edit guest name:", guest.name);
  if (newName) {
    guest.name = newName.trim();
    renderGuests();
  }
}

function removeGuest(id) {
  guests = guests.filter(g => g.id !== id);
  renderGuests();
}
