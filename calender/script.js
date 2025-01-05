// const calendar = document.getElementById('dates');
// const monthYear = document.getElementById('month-year');
// const prevMonth = document.getElementById('prev-month');
// const nextMonth = document.getElementById('next-month');

// let currentMonth = new Date().getMonth();
// let currentYear = new Date().getFullYear();

// const events = [
//   { date: '2024-11-01', event: '3:00 p.m - WSO2' },
//   { date: '2024-11-04', event: '1:00 p.m - IFS' },
//   { date: '2024-11-09', event: '1:00 p.m - Pajero' },
//   { date: '2024-11-12', event: '3:00 p.m - WSO2' },
//   { date: '2024-11-22', event: '3:00 p.m - CISCO' },
//   { date: '2024-11-25', event: '3:00 p.m - IFS' },
//   { date: '2024-12-22', event: '3:00 p.m - CISCO' },
//   { date: '2024-12-27', event: '3:00 p.m - IFS' },
// ];

// function generateCalendar(month, year) {
//   calendar.innerHTML = '';
//   monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   for (let i = 0; i < firstDay; i++) {
//     calendar.innerHTML += '<div></div>';
//   }

//   for (let day = 1; day <= daysInMonth; day++) {
//     const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//     const event = events.find(e => e.date === date);

//     calendar.innerHTML += `
//       <div>
//         <span>${day}</span>
//         ${event ? `<span>${event.event}</span>` : ''}
//       </div>
//     `;
//   }
// }

// prevMonth.addEventListener('click', () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// // Initialize Calendar
// generateCalendar(currentMonth, currentYear);
const calendar = document.getElementById('dates');
const monthYear = document.getElementById('month-year');
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const events = [
  { date: '2024-11-01', event: '3:00 p.m - WSO2' },
  { date: '2024-11-04', event: '1:00 p.m - IFS' },
  { date: '2024-11-09', event: '1:00 p.m - Pajero' },
  { date: '2024-11-12', event: '3:00 p.m - WSO2' },
  { date: '2024-11-22', event: '3:00 p.m - CISCO' },
  { date: '2024-11-25', event: '3:00 p.m - IFS' },
  { date: '2024-12-22', event: '3:00 p.m - CISCO' },
  { date: '2024-12-27', event: '3:00 p.m - IFS' },
];

function generateCalendar(month, year) {
  calendar.innerHTML = '';
  monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += '<div></div>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const event = events.find(e => e.date === date);

    const dayElement = document.createElement('div');
    dayElement.innerHTML = `
      <span>${day}</span>
      ${event ? `<span>${event.event}</span>` : ''}
    `;
    dayElement.className = 'calendar-day';
    dayElement.dataset.date = date;

    // Add click event listener
    dayElement.addEventListener('click', () => {
      window.location.href = `/visit-details?date=${date}`;
    });

    calendar.appendChild(dayElement);
  }
}

prevMonth.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

// Initialize Calendar
generateCalendar(currentMonth, currentYear);
function generateCalendar(month, year) {
  calendar.innerHTML = '';
  monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += '<div></div>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const event = events.find(e => e.date === date);

    const dayElement = document.createElement('div');
    dayElement.innerHTML = `
      <span>${day}</span>
      ${event ? `<span>${event.event}</span>` : ''}
    `;
    dayElement.className = 'calendar-day';
    dayElement.dataset.date = date;

    // Add click event listener
    dayElement.addEventListener('click', () => {
      // Redirect to YouTube with the date as a query parameter
      window.location.href = `https://youtube.com?date=${date}`;
    });

    calendar.appendChild(dayElement);
  }
}

