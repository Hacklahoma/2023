function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});