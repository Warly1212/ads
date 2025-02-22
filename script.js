function toggleList() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackground = document.getElementById('menuBackground');
    if (menuOverlay.style.display === 'none' || menuOverlay.style.display === '') {
        menuOverlay.style.display = 'flex';
        menuBackground.style.display = 'block';
    } else {
        menuOverlay.style.display = 'none';
        menuBackground.style.display = 'none';
    }
}

function inp_variavel() {
    const inputs = document.getElementById('inputs');
    const menu_inp = document.getElementById('menu_inp');
    if (inputs.style.display === 'none' || inputs.style.display === '') {
        inputs.style.display = 'flex';
        menu_inp.style.display = 'block';
        
    } else {
        inputs.style.display = 'none';
        menu_inp.style.display = 'none';
    }
}

window.onload = function() {
    document.getElementById('menuOverlay').style.display = 'none';
    document.getElementById('menuBackground').style.display = 'none';
    document.getElementById('menu_inp').style.display = 'none';
}