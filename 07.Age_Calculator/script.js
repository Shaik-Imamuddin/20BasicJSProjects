function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        document.getElementById("result").innerHTML = "<p>Please enter your date of birth.</p>";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let totalMonths = years * 12 + months;
    let totalDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
    let totalWeeks = Math.floor(totalDays / 7);
    let totalHours = totalDays * 24;
    let totalMinutes = totalHours * 60;
    let totalSeconds = totalMinutes * 60;

    document.getElementById("result").innerHTML = `
        <p><strong>Your Age:</strong></p>
        <p>${years} years ${months} months ${days} days</p>
        <p>${totalMonths} months ${days} days</p>
        <p>${totalWeeks} weeks ${totalDays % 7} days</p>
        <p>${totalDays.toLocaleString()} days</p>
        <p>${totalHours.toLocaleString()} hours</p>
        <p>${totalMinutes.toLocaleString()} minutes</p>
        <p>${totalSeconds.toLocaleString()} seconds</p>
    `;
}
