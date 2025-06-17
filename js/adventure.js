// adventure.js

// Data for the adventure stops
const stops = [
  {
    icon: '<i class="ri-seedling-line"></i>',
    chapter: 'The First Steps',
    role: 'IT Support Representative',
    guild: 'Kalash Services',
    location: 'Lalitpur, Nepal',
    period: 'Dec 2021 - Nov 2022',
    missions: [
      'Resolved customer issues with empathy and technical skill.',
      'Provided professional support and solutions for clients.',
      'Contributed to the Spin Wheel App and Dynamic Website projects.'
    ],
    tools: 'PHP, JavaScript, APIs',
    xp: 'Customer empathy, troubleshooting, communication',
  },
  {
    icon: '<i class="ri-hammer-line"></i>',
    chapter: 'The Northern Forge',
    role: 'Jr. Laravel Developer',
    guild: 'Lele Ventures Pvt.Ltd',
    location: 'Lalitpur, Nepal',
    period: 'Aug 2023 - Aug 2024',
    missions: [
      'Developed ERP modules and user access controls.',
      'Built dynamic interfaces with Laravel Livewire.',
      'Worked on Accounting Software and ERP (POS & Inventory) systems.'
    ],
    tools: 'Laravel, Livewire, MySQL, DataTables, PHP',
    xp: 'Full-stack development, dynamic UIs, data management',
  },
  {
    icon: '<i class="ri-building-4-line"></i>',
    chapter: 'The Capital of Code',
    role: 'Jr. Full Stack Developer',
    guild: 'SysQube Technologies',
    location: 'Lalitpur, Nepal',
    period: 'Sept 2024 - Present',
    missions: [
      'Integrated JSX with Laravel using Inertia.js.',
      'Built APIs and backend logic for eCommerce solutions.',
      'Led projects like Marketplace Website and Sales Process Automation.'
    ],
    tools: 'Laravel, Inertia.js, MySQL, JSX, PHP',
    xp: 'Modern stacks, scalable systems, project leadership',
    current: true
  }
];

const timelineList = document.getElementById('timeline-list');
const detailPanel = document.getElementById('detail-panel');

// Render timeline items
stops.forEach((stop, index) => {
  const item = document.createElement('div');
  item.classList.add('timeline-item');
  if (stop.current) item.classList.add('selected');
  item.dataset.index = index;

  const icon = document.createElement('div');
  icon.className = 'timeline-icon';
  icon.innerHTML = stop.icon;
  item.appendChild(icon);

  const title = document.createElement('div');
  title.innerHTML = `<strong>${stop.chapter}</strong><br>
    ${stop.role} @ ${stop.guild}
    ${stop.current ? '<span class="badge">CURRENT QUEST</span>' : ''}`;
  item.appendChild(title);

  // Click handler to select and show detail
  item.addEventListener('click', () => {
    // Remove selection from all
    document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('selected'));
    item.classList.add('selected');
    renderDetail(index);
  });

  timelineList.appendChild(item);
});

// Render details for a selected stop
function renderDetail(index) {
  const stop = stops[index];
  detailPanel.innerHTML = `
    <h3>${stop.chapter}</h3>
    <p><strong>Role:</strong> ${stop.role} @ ${stop.guild}</p>
    <p><strong>Location:</strong> ${stop.location}</p>
    <p><strong>Period:</strong> ${stop.period}</p>
    <ul class="missions">
      ${stop.missions.map(m => `<li>${m}</li>`).join('')}
    </ul>
    <p><strong>Tools:</strong> ${stop.tools}</p>
    <p><strong>Experience gained:</strong> ${stop.xp}</p>
    ${stop.current ? `<p><em>Currently on this journey</em></p>` : ''}
  `;
}

// Initialize: show the first stop details
renderDetail(0);
