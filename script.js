function toggleDarkMode() {
    let body = document.body;
    let button = document.getElementById('darkModeBtn');

    // Alterna entre o modo claro e escuro
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.innerText = "Dark Mode";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.innerText = "Light Mode";
    }
}
