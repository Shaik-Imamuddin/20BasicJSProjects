function toggleMode() {
    const body = document.body;
    const btn = document.getElementById('toggleBtn');
    const title = document.getElementById('text')

    if (btn.textContent === "☀️") {
        body.style.backgroundColor = "white";
        btn.textContent = "🌙";
        btn.style.backgroundColor = "black";
        title.style.color = "black";
        title.textContent = "Click to Turn on Dark mode";
    } else {
        body.style.backgroundColor = "black";
        btn.textContent = "☀️";
        btn.style.backgroundColor = "white";
        title.textContent = "Click to Turn off Dark mode";
        title.style.color = "white"
    }
}