function toggleList() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackground = document.getElementById('menuBackground');
    if (!menuOverlay.classList.contains('active') && !menuBackground.classList.contains('active')) {
        menuOverlay.classList.add('active');
        menuBackground.classList.add('active');
    } else {
        menuOverlay.classList.remove('active');
        menuBackground.classList.remove('active');
    }
}

function toggleList() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackground = document.getElementById('menuBackground');
    if (!menuOverlay.classList.contains('active') && !menuBackground.classList.contains('active')) {
        menuOverlay.classList.add('active');
        menuBackground.classList.add('active');
    } else {
        menuOverlay.classList.remove('active');
        menuBackground.classList.remove('active');
    }
}

window.onload = function() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackground = document.getElementById('menuBackground');
    menuOverlay.classList.remove('active');
    menuBackground.classList.remove('active');
    document.getElementById('menu_inp').style.display = 'none';
}