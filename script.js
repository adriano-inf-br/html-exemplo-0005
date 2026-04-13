function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Fecha o menu ao clicar em um link (útil para mobile)
const links = document.querySelectorAll('.sidebar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            toggleMenu();
        }
    });
});
