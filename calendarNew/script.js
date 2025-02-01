const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let date = new Date();
updateCalendar();

prevMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    updateCalendar();
});

nextMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    updateCalendar();
});

function updateCalendar() {
    const month = date.getMonth();
    const year = date.getFullYear();
    monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    calendarDates.innerHTML = "";
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Add empty spaces for the first row
    for (let i = 0; i < firstDay; i++) {
        calendarDates.innerHTML += "<span></span>";
    }

    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
        const span = document.createElement("span");
        span.textContent = i;

        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            span.classList.add("today");
        }

        span.addEventListener("click", () => alert(`Selected Date: ${i} ${monthYear.innerText}`));
        calendarDates.appendChild(span);
    }
}
