
    function toggleMode() {
        const toggleLabel = document.querySelector(".toggle-label")
        const toggleBtn = document.querySelector(".toggle-btn")
        // update ui
        if(mode === true) { // to dark mode
            toggleLabel.innerHTML = "Dark Mode"
            toggleBtn.style.left = "var(--toggle-dim)"
        } else {    // to light mode
            toggleLabel.innerHTML = "Light Mode"
            toggleBtn.style.left = "0"
        }
        mode = !mode;
        // Update Theme
        if(mode) {
            document.getElementById("theme").href = "style.css"
        } else {
            document.getElementById("theme").href = "style-dark.css"
        }
    }
    let mode = true;    // light mode
    document.querySelector(".toggle")
        .addEventListener('click', toggleMode)
    document.querySelector(".toggle-label")
        .addEventListener('click', toggleMode)