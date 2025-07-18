const month = document.getElementById("month");
const year = document.getElementById("year");
const calendar = document.getElementById("calendar");

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function selectDropdowns() {
    months.forEach((m, index) => {
    const option = document.createElement("option");
        option.value = index;
        option.text = m;
        month.appendChild(option);
    });

    const currentYear = new Date().getFullYear();
    for (let y = currentYear - 50; y <= currentYear + 50; y++) {
        const option = document.createElement("option");
        option.value = y;
        option.text = y;
        year.appendChild(option);
        }
    month.value = new Date().getMonth();
    year.value = currentYear;
}

function generateCalendar() {
    calendar.innerHTML = ""; // Clear previous calendar
      // Day headers
      dayNames.forEach(day => {
        const dayHeader = document.createElement("div");
        dayHeader.className = "day-name";
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
      });

      const selectedMonth  = parseInt(month.value);
      const selectedYear  = parseInt(year.value);

      const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
      const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
      const today = new Date();

      // Fill empty grid before first day
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
      }

      // Fill days
      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.className = "day";
        dayCell.textContent = day;

        if (
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          dayCell.classList.add("today");
        }

        calendar.appendChild(dayCell);
      }
    }
selectDropdowns();
generateCalendar();