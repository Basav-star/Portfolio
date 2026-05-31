const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';
    }
    else{
        themeToggle.innerHTML =
        '<i class="fas fa-moon"></i>';
    }
});