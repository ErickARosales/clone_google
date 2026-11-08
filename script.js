document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");

    if (searchInput) {
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const busqueda = searchInput.value.trim();
                if (busqueda !== "") {
                    // Redirige a la búsqueda real de Google
                    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(busqueda)}`;
                }
            }
        });
    }
});