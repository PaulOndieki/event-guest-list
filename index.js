// This file is just for testing in terminal with: node /index.js

const guests = [];

function addGuest(name, category) {
  if (guests.length >= 10) {
    console.log("❌ Guest list is full (max 10).");
    return;
  }

  const guest = {
    id: Date.now(),
    name,
    category,
    attending: false,
    time: new Date().toLocaleTimeString()
  };

  guests.push(guest);
  console.log(`✅ Added guest: ${name} (${category}) at ${guest.time}`);
}

function showGuests() {
  console.log("\nGuest List:");
  guests.forEach(g => {
    console.log(`${g.name} - ${g.category} - ${g.attending ? "Attending" : "Not Attending"} - Added at ${g.time}`);
  });
}

function runTest() {
  addGuest("Alice", "Friend");
  addGuest("Bob", "Family");
  addGuest("Charlie", "Colleague");

  showGuests();
}

// Call test function when you run: node /index.js
runTest();
