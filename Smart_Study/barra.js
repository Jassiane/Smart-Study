function searchMaterials() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const selectedType = document.getElementById("materialType")?.value.toLowerCase();
    const materials = document.querySelectorAll("#materialsList li");

    materials.forEach((item) => {
        const text = item.textContent.toLowerCase();
        const type = item.getAttribute("data-type").toLowerCase();

        if (
            text.includes(input) &&
            (selectedType === "" || type === selectedType)
        ) {
            item.style.display = ""; // Mostrar item
        } else {
            item.style.display = "none"; // Esconder item
        }
    });
}
