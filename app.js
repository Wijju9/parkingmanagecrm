const navItems = [
  { key: 'dashboard', label: 'Dashboard', badge: '' },
  { key: 'bookings', label: 'Bookings', badge: '18' },
  { key: 'valet', label: 'Valet Team', badge: '6' },
  { key: 'reports', label: 'Reports', badge: '' },
  { key: 'settings', label: 'Settings', badge: '' }
];

const subTabs = ['Overview', 'Operations', 'Service Levels', 'Incidents'];

const kpis = [
  { title: 'Total Slots', value: '1,860', delta: '+8% vs yesterday' },
  { title: 'Vehicles Parked', value: '1,304', delta: '70% occupancy' },
  { title: 'Avg. Retrieval Time', value: '4m 12s', delta: '-34s improvement' },
  { title: 'Today Revenue', value: '$31,420', delta: '+$2,150 today' }
];

const recentBookings = [
  ['BK-10294', 'Emma Stone', 'Downtown A-12', '02:15 PM', 'Active'],
  ['BK-10293', 'Jacob Reed', 'Riverside C-04', '02:08 PM', 'Pending'],
  ['BK-10292', 'Sophia Lin', 'Marina EV-09', '01:59 PM', 'Delayed'],
  ['BK-10291', 'Mason Hart', 'City Mall B-18', '01:44 PM', 'Active']
];

const zoneStats = [
  ['Zone A', 89],
  ['Zone B', 72],
  ['Zone C', 64],
  ['Zone D', 54]
];

const valetStaff = [
  ['Amelia Scott', 'Downtown Hub', 'On duty', '3m 20s'],
  ['Noah Baker', 'Riverside Lot', 'On duty', '4m 01s'],
  ['Lucas Hall', 'Marina EV Bay', 'Break', '—'],
  ['Ella Young', 'City Mall', 'On duty', '3m 54s']
];

const views = {
  dashboard: 'Dashboard Overview',
  bookings: 'Bookings Management',
  valet: 'Valet Team Operations',
  reports: 'Reporting & Analytics',
  settings: 'Platform Settings'
};

const sideNav = document.getElementById('side-nav');
const subNav = document.getElementById('sub-nav');
const viewRoot = document.getElementById('view-root');
const viewTitle = document.getElementById('view-title');

let state = {
  view: 'dashboard',
  tab: 'Overview'
};

function renderSideNav() {
  sideNav.innerHTML = '';
  navItems.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = `nav-link ${state.view === item.key ? 'active' : ''}`;
    btn.type = 'button';
    btn.innerHTML = `<span>${item.label}</span>${item.badge ? `<span class="pill">${item.badge}</span>` : ''}`;
    btn.onclick = () => {
      state.view = item.key;
      renderApp();
    };
    sideNav.appendChild(btn);
  });
}

function renderSubNav() {
  subNav.innerHTML = '';
  subTabs.forEach((tab) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${state.tab === tab ? 'active' : ''}`;
    btn.type = 'button';
    btn.textContent = tab;
    btn.onclick = () => {
      state.tab = tab;
      renderApp();
    };
    subNav.appendChild(btn);
  });
}

function dashboardMarkup() {
  return `
    <section class="grid-kpi">
      ${kpis
        .map(
          (kpi) => `
            <article class="card kpi">
              <p class="muted">${kpi.title}</p>
              <h3>${kpi.value}</h3>
              <span class="tag">${kpi.delta}</span>
            </article>
          `
        )
        .join('')}
    </section>

    <section class="main-grid">
      <article class="card">
        <h3>Recent Booking Requests</h3>
        <p class="muted">Real-time queue and handoff status</p>
        <table class="table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Slot</th>
              <th>Check-in</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${recentBookings
              .map(
                (row) => `
                  <tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                    <td>${row[3]}</td>
                    <td><span class="status ${row[4].toLowerCase()}">${row[4]}</span></td>
                  </tr>
                `
              )
              .join('')}
          </tbody>
        </table>
      </article>

      <article class="card">
        <h3>Zone Utilization</h3>
        <p class="muted">Occupancy heat by parking zone</p>
        <div class="bar-list">
          ${zoneStats
            .map(
              (zone) => `
                <div class="bar-row">
                  <p><span>${zone[0]}</span><span>${zone[1]}%</span></p>
                  <div class="track"><div class="fill" style="width:${zone[1]}%"></div></div>
                </div>
              `
            )
            .join('')}
        </div>
      </article>
    </section>
  `;
}

function bookingsMarkup() {
  return `
    <section class="card">
      <h3>Active Booking Board</h3>
      <p class="muted">Manage incoming bookings, verify arrivals, and assign slots.</p>
      <table class="table">
        <thead>
          <tr>
            <th>Booking ID</th><th>Customer</th><th>Slot</th><th>ETA</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${recentBookings
            .map(
              (row) => `
                <tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                  <td>${row[2]}</td>
                  <td>${row[3]}</td>
                  <td><span class="status ${row[4].toLowerCase()}">${row[4]}</span></td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    </section>
  `;
}

function valetMarkup() {
  return `
    <section class="card">
      <h3>Valet Team Availability</h3>
      <p class="muted">Staff assignment and average retrieval speed.</p>
      <table class="table">
        <thead>
          <tr>
            <th>Associate</th><th>Current Zone</th><th>Shift Status</th><th>Avg Retrieval</th>
          </tr>
        </thead>
        <tbody>
          ${valetStaff
            .map(
              (row) => `
                <tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                  <td><span class="status ${row[2] === 'On duty' ? 'active' : 'pending'}">${row[2]}</span></td>
                  <td>${row[3]}</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    </section>
  `;
}

function reportsMarkup() {
  return `
    <section class="grid-kpi">
      <article class="card kpi"><p class="muted">Weekly Check-ins</p><h3>8,420</h3><span class="tag">+4.4%</span></article>
      <article class="card kpi"><p class="muted">Cancelled Bookings</p><h3>128</h3><span class="tag warn">+1.2%</span></article>
      <article class="card kpi"><p class="muted">Peak Hour</p><h3>6PM - 8PM</h3><span class="tag">Consistent trend</span></article>
      <article class="card kpi"><p class="muted">CSAT Score</p><h3>4.8 / 5</h3><span class="tag">Excellent</span></article>
    </section>
  `;
}

function settingsMarkup() {
  return `
    <section class="card settings-list">
      <h3>Platform Settings</h3>
      <p class="muted">Configuration shortcuts for daily operations.</p>
      <ul>
        <li>⚙️ Slot allocation rules</li>
        <li>🔔 Notification preferences</li>
        <li>💳 Billing and payment gateways</li>
        <li>👥 Team roles and permissions</li>
      </ul>
    </section>
  `;
}

function renderContent() {
  switch (state.view) {
    case 'dashboard':
      viewRoot.innerHTML = dashboardMarkup();
      break;
    case 'bookings':
      viewRoot.innerHTML = bookingsMarkup();
      break;
    case 'valet':
      viewRoot.innerHTML = valetMarkup();
      break;
    case 'reports':
      viewRoot.innerHTML = reportsMarkup();
      break;
    case 'settings':
      viewRoot.innerHTML = settingsMarkup();
      break;
    default:
      viewRoot.innerHTML = dashboardMarkup();
  }
}

function renderApp() {
  viewTitle.textContent = `${views[state.view]} • ${state.tab}`;
  renderSideNav();
  renderSubNav();
  renderContent();
}

renderApp();
