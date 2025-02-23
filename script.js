function click_menu() {

    const nav_list = document.getElementById('nav_list');
    const menuBackground = document.getElementById('menuBackground');

    if (nav_list.style.display === 'none' || nav_list.style.display === '') {
        nav_list.style.display = 'flex';
        nav_list.classList.add('nav-appear');
        setTimeout(() => {
            nav_list.classList.add('nav-appear-active');
        }, 10);
        menuBackground.style.display = 'block';
    } else {
        nav_list.classList.remove('nav-appear-active');
        setTimeout(() => {
            nav_list.style.display = 'none';
            menuBackground.style.display = 'none';
            nav_list.classList.remove('nav-appear');
        }, 500);
    }
}

function inp_variavel() {
    const inputs = document.getElementById('inputs');
    const inputField = inputs.querySelector('input');
    const menu_inp = document.getElementById('menu_inp');
    if (inputs.style.display === 'none' || inputs.style.display === '') {
        menu_inp.style.display = 'block';
        inputs.style.display = 'flex';
        requestAnimationFrame(() => {
            inputField.focus();
        });
    } else {
        inputs.style.display = 'none';
        menu_inp.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("input_aletrnativo1");
    const clearButton = document.getElementById("limp_text");
    
    clearButton.addEventListener("click", function() {
        inputField.value = "";
        inputField.focus();
    });

    if (inputField.value.trim() !== "") {
        clearButton.style.display = "flex";
      } else {
        clearButton.style.display = "none";
        clearButton.focus();
    }
    
});

function limp_text() {
    document.getElementById('limp_text').style.display = 'none';
}


function acionar_input() {
    var input = document.getElementById("input_aletrnativo1");
    var botao = document.getElementById("limp_text");

    if (input.value.trim() !== "") {
      botao.style.display = "flex";
    } else {
      botao.style.display = "none";
      botao.focus();
    }
}

window.onload = function() {
    document.getElementById('nav_list').style.display = 'none';
    document.getElementById('menuBackground').style.display = 'none';
    document.getElementById('menu_inp').style.display = 'none';
}