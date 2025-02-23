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
    const voltarr = document.getElementById('voltar_set');

    if (inputs.style.display === 'none' || inputs.style.display === '') {
        menu_inp.style.display = 'block';
        inputs.style.display = 'flex';
        voltarr.style.display = 'flex'
        requestAnimationFrame(() => {
            inputField.focus();
        });
    } else {
        inputs.style.display = 'none';
        menu_inp.style.display = 'none';
        voltarr.style.display = 'none'
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input_aletrnativo1");
    const clearButton = document.getElementById("limp_text");

    clearButton.addEventListener("click", function () {
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

let currentIndex = 1;
let startX;
let isDragging = false;

const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;
const intervalTime = 7000;

function moveSlide(n) {
    currentIndex += n;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;

    if (currentIndex >= totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = 1;
            slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        }, 500);
    } else if (currentIndex <= 0) {
        setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = totalSlides - 2;
            slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        }, 500);
    }

    updateDots();
}

function moveSlideTo(index) {
    currentIndex = index + 1;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === ((currentIndex - 1 + totalSlides - 2) % (totalSlides - 2)) % 3) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function autoSlide() {
    moveSlide(1);
}

document.querySelector('.carousel-slide').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

document.querySelector('.carousel-slide').addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (diff > 50) {
        moveSlide(1);
        isDragging = false;
    } else if (diff < -50) {
        moveSlide(-1);
        isDragging = false;
    }
});

document.querySelector('.carousel-slide').addEventListener('touchend', () => {
    isDragging = false;
});

document.addEventListener('DOMContentLoaded', () => {
    slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    setInterval(autoSlide, intervalTime);
});







window.onload = function () {
    document.getElementById('nav_list').style.display = 'none';
    document.getElementById('menuBackground').style.display = 'none';
    document.getElementById('menu_inp').style.display = 'none';
}