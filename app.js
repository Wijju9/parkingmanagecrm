const bookings = [
  {
    customer: 'Ava Thompson',
    spot: 'B2-14, City Center Garage',
    time: '2:00 PM - 5:00 PM',
    fee: '$14.00'
  },
  {
    customer: 'Noah Williams',
    spot: 'E1-03, Marina Lot',
    time: '1:30 PM - 4:30 PM',
    fee: '$11.50'
  },
  {
    customer: 'Mia Rodriguez',
    spot: 'A4-09, Union Plaza',
    time: '3:00 PM - 7:00 PM',
    fee: '$18.00'
  },
  {
    customer: 'Liam Johnson',
    spot: 'EV-22, Market Street Hub',
    time: '4:15 PM - 6:15 PM',
    fee: '$9.40'
  }
];

const occupancyByZone = [
  { name: 'Zone A', occupancy: 92 },
  { name: 'Zone B', occupancy: 78 },
  { name: 'Zone C', occupancy: 64 },
  { name: 'Zone D', occupancy: 49 }
];

const bookingList = document.getElementById('booking-list');
const zoneBars = document.getElementById('zone-bars');

bookings.forEach((booking) => {
  const item = document.createElement('li');
  item.className = 'booking-row';
  item.innerHTML = `
    <div>
      <p><strong>${booking.customer}</strong></p>
      <p class="meta">${booking.spot} • ${booking.time}</p>
    </div>
    <strong>${booking.fee}</strong>
  `;
  bookingList.appendChild(item);
});

occupancyByZone.forEach((zone) => {
  const item = document.createElement('div');
  item.className = 'bar-item';
  item.innerHTML = `
    <p><span>${zone.name}</span><span>${zone.occupancy}%</span></p>
    <div class="bar-track">
      <div class="bar-fill" style="width: ${zone.occupancy}%"></div>
    </div>
  `;
  zoneBars.appendChild(item);
});
