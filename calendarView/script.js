const calendar = document.getElementById('calendar');
const modal = document.getElementById('descriptionModal');
const closeModal = document.querySelector('.close');
const saveDescriptionButton = document.getElementById('saveDescription');
const eventDescriptionInput = document.getElementById('eventDescription');
let selectedDate = null;
let descriptions = {};

function generateCalendar() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    // Set the current month and year
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.title = months[month] + " " + year;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    
    // Get the number of days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    // Clear existing calendar
    calendar.innerHTML = '';
    
    // Add empty spaces before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        calendar.appendChild(emptyDiv);
    }
    
    // Add days to the calendar
    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.classList.add('calendar-day');
        
        // Check if a description already exists for this day
        if (descriptions[day]) {
            dayDiv.style.backgroundColor = '#f0a';
        }
        
        // Add click event to show description modal
        dayDiv.addEventListener('click', () => {
            selectedDate = day;
            eventDescriptionInput.value = descriptions[day] || '';
            modal.style.display = 'flex';
        });
        
        calendar.appendChild(dayDiv);
    }
}

function saveDescription() {
    descriptions[selectedDate] = eventDescriptionInput.value;
    modal.style.display = 'none';
    generateCalendar();
}

function closeModalHandler() {
    modal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalHandler);
saveDescriptionButton.addEventListener('click', saveDescription);

window.addEventListener('load', generateCalendar);
