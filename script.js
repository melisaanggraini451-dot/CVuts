function toggleTheme() {

    const body = document.body;

    const button = document.getElementById("btn-theme");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        button.innerHTML = "☀ Light Mode";

    } else {

        button.innerHTML = "☾ Dark Mode";

    }
}
