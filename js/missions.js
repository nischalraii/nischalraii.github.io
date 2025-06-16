// missions.js
const missions = [
  {
    title: "JobKhoja - Job Portal Application",
    level: 5,
    stack: "PHP, MySQL",
    xp: 1200,
    desc: [
      "Multi-role job portal with admin, employer, and jobseeker dashboards",
      "Advanced search, filtering, and application tracking",
      "Custom notifications and analytics",
    ],
  },
  {
    title: "Library Management System with Recommendation",
    level: 4,
    stack: "Django (Python), SQLite",
    xp: 900,
    desc: [
      "Online library with user accounts and borrowing system",
      "Book recommendation engine based on user rating similarity",
      "Admin panel for inventory and user management",
    ],
  },
  {
    title: "Content Management System like WordPress",
    level: 5,
    stack: "PHP, Laravel, JavaScript, jQuery, DataTables, MySQL",
    xp: 1100,
    desc: [
      "Themable CMS built with Laravel only",
      "Drag-and-drop page builder and media manager",
      "User roles, permissions, and analytics dashboard",
    ],
  },
  {
    title: "Marketplace Website (Tech & Electronics)",
    level: 4,
    stack: "Laravel, Inertia.js, MySQL",
    xp: 1000,
    desc: [
      "Integrated JSX frontend with Laravel backend for seamless navigation",
      "Developed backend logic for product management, payment processing, and order handling",
      "Implemented order management system for cart and checkout tracking",
    ],
  },
  {
    title: "Sales Process Automation",
    level: 4,
    stack: "Laravel, MySQL",
    xp: 950,
    desc: [
      "Developed backend logic for order management and access control",
      "Designed optimized databases for products, customers, and orders",
      "Improved workflow efficiency and data retrieval speed",
    ],
  },
  {
    title: "Spin Wheel for Loyalty App",
    level: 3,
    stack: "Laravel, JavaScript",
    xp: 800,
    desc: [
      "Implemented frontend and backend integration for spin wheel feature",
      "Developed and applied logic for spin wheel functionality",
      "Created APIs to support spin wheel procedure and interactions",
    ],
  },
  {
    title: "Fully Functional Dynamic Website",
    level: 3,
    stack: "Laravel, JavaScript",
    xp: 850,
    desc: [
      "Developed admin panel for content and user management",
      "Integrated frontend with backend for dynamic content loading",
      "Created and managed APIs for various functionalities",
    ],
  },
  {
    title: "Accounting Software",
    level: 4,
    stack: "Laravel, Livewire, MySQL",
    xp: 950,
    desc: [
      "Used Laravel Livewire for dynamic content loading",
      "Implemented accounting logics to streamline financial processes",
      "Enhanced system reliability through optimization and troubleshooting",
    ],
  },
  {
    title: "ERP (POS & Inventory Management)",
    level: 4,
    stack: "Laravel, Livewire, MySQL",
    xp: 1000,
    desc: [
      "Designed subscription module with customizable plans",
      "Developed plan selection and user access control features",
      "Implemented feature-based restrictions for proper plan functionality",
    ],
  },
];

function renderMissions() {
  const container = document.getElementById("missions");
  if (!container) return;

  missions.forEach((mission) => {
    const descList = mission.desc.map(item => `<li>${item}</li>`).join("");
    container.innerHTML += `
      <div class="mission-card flex items-start mb-10 relative group">
        <div class="mission-content bg-white border-2 border-gray-300 rounded-lg px-5 py-4 shadow-pixel w-full relative">
          <div class="flex items-center justify-between mb-1">
            <div class="font-pixel text-lg">${mission.title}</div>
            <span class="text-xs font-pixel bg-gray-200 border border-gray-400 rounded px-2 py-0.5 ml-2">Lv. ${mission.level}</span>
          </div>
          <div class="text-xs font-pixel text-gray-500 mb-2">${mission.stack}</div>
          <ul class="list-disc ml-5 text-sm text-gray-700">${descList}</ul>
          <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="bg-green-200 text-green-800 font-pixel text-xs px-2 py-1 rounded shadow-pixel">ACHIEVED</span>
          </div>
          <div class="absolute bottom-2 right-2 text-xs font-pixel bg-yellow-100 border border-yellow-400 rounded px-2 py-0.5 shadow-pixel">XP: ${mission.xp}</div>
        </div>
      </div>
    `;
  });
}

// Wait until DOM is loaded to render missions
document.addEventListener("DOMContentLoaded", renderMissions);
