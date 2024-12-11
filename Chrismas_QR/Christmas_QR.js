document.addEventListener("DOMContentLoaded", () => {
    const calendarGrid = document.getElementById("calendarGrid");
    const today = new Date();
    const year = today.getFullYear();
    const month = 11; // Декември (започва от 0)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Изграждане на календар
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        if (day === 29) dayElement.classList.add("day-29");
        if (day === 30) dayElement.classList.add("day-30");
        if (day === 31) dayElement.classList.add("day-31");

        const currentDate = new Date(year, month, day);
        if (currentDate.toDateString() === today.toDateString()) {
            dayElement.classList.add("current");
            dayElement.addEventListener("click", () => {
                window.location.href = `SecondPage.html?wish=${day}`;
            });
        } else if (currentDate > today) {
            dayElement.classList.add("future");
        }

        calendarGrid.appendChild(dayElement);
    }

    // Изчисляване на дните до Коледа
    const daysLeftText = document.getElementById("daysLeft");
    const christmasDate = new Date(year, 11, 25); // Коледа
    const daysLeft = Math.ceil((christmasDate - today) / (1000 * 60 * 60 * 24));
    daysLeftText.textContent = `Дни до Коледа: ${daysLeft}`;
});
