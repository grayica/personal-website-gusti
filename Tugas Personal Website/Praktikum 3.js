document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Mode Putih";
    }

    darkModeToggle.addEventListener("click", function (event) {
        event.preventDefault(); 
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "Mode Putih";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "Mode Hitam";
        }
    });
});


