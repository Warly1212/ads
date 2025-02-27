document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("buscar2");
    const inputField = document.getElementById("input_alternativo2");
    const result = document.getElementById('results');
    const pesquisaa = document.getElementById("pesquisaa");

    function executeSearch() {
        pesquisaa.style.display = 'flex';
    }

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        executeSearch();
    });

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            executeSearch()
        }
    });
});




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



function inp_variavel2() {
    const input_var = document.getElementById('input_alternativo2');
    const pesquisaa = document.getElementById('pesquisaa')

    pesquisaa.style.display = 'flex'
    requestAnimationFrame(() => {
        input_var.focus();
    });
}




function voltar2() {
    const pesquisaa = document.getElementById('pesquisaa');

    pesquisaa.style.display = 'none';
    
}



document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input_alternativo2");
    const clearButton = document.getElementById("limp_text2");
    const searchButton = document.getElementById("buscar2"); 


    clearButton.addEventListener("click", function () {
        inputField.value = "";
        inputField.focus();
        updateButtonVisibility();
    });

    
    function updateButtonVisibility() {
        if (inputField.value.trim() !== "") {
            clearButton.style.display = "flex";
            searchButton.style.display = "flex";
        } else {
            clearButton.style.display = "none";
            searchButton.style.display = "none";
        }
    }

    updateButtonVisibility();

    inputField.addEventListener("input", updateButtonVisibility);
});




function limp_text2() {
    const inputField = document.getElementById("input_alternativo2");
    inputField.value = "";
    acionar_input2();
}

function buscar() {
    const inputField = document.getElementById("input_alternativo2");
    alert("Buscando: " + inputField.value); 
}


function acionar_input2() {
    var input = document.getElementById("input_alternativo2");
    var botao = document.getElementById("limp_text2");


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
let autoSlideInterval;

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

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, intervalTime);
}

document.querySelector('.carousel-slide').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    resetAutoSlide();
});

document.querySelector('.carousel-slide').addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (diff > 50) {
        moveSlide(1);
        isDragging = false;
        resetAutoSlide();
    } else if (diff < -50) {
        moveSlide(-1);
        isDragging = false;
        resetAutoSlide();
    }
});

document.querySelector('.carousel-slide').addEventListener('touchend', () => {
    isDragging = false;
    resetAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    autoSlideInterval = setInterval(autoSlide, intervalTime);
});

document.addEventListener("DOMContentLoaded", function() {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");
    const p5 = document.getElementById("p5");
    const p6 = document.getElementById("p6");

    const periodo1 = document.getElementById("periodo1");
    const periodo2 = document.getElementById("periodo2");
    const periodo3 = document.getElementById("periodo3");
    const periodo4 = document.getElementById("periodo4");
    const periodo5 = document.getElementById("periodo5");
    const periodo6 = document.getElementById("periodo6");

    p1.addEventListener("click", function() {
        p1.classList.add("active");
        p2.classList.remove("active");
        p3.classList.remove("active");
        p4.classList.remove("active");
        p5.classList.remove("active");
        p6.classList.remove("active");
        

        periodo1.style.zIndex = 100;
        periodo2.style.zIndex = 1;
        periodo3.style.zIndex = 1;
        periodo4.style.zIndex = 1;
        periodo5.style.zIndex = 1;
        periodo6.style.zIndex = 1;
    });

    p2.addEventListener("click", function() {
        p1.classList.remove("active");
        p2.classList.add("active");
        p3.classList.remove("active");
        p4.classList.remove("active");
        p5.classList.remove("active");
        p6.classList.remove("active");
        periodo1.style.zIndex = 1;
        periodo2.style.zIndex = 100;
        periodo3.style.zIndex = 1;
        periodo4.style.zIndex = 1;
        periodo5.style.zIndex = 1;
        periodo6.style.zIndex = 1;
    });

    p3.addEventListener("click", function() {
        p3.classList.add("active");
        p1.classList.remove("active");
        p2.classList.remove("active");
        p4.classList.remove("active");
        p5.classList.remove("active");
        p6.classList.remove("active");
        periodo1.style.zIndex = 1;
        periodo2.style.zIndex = 1;
        periodo3.style.zIndex = 100;
        periodo4.style.zIndex = 1;
        periodo5.style.zIndex = 1;
        periodo6.style.zIndex = 1;
    });

    p4.addEventListener("click", function() {
        p4.classList.add("active");
        p1.classList.remove("active");
        p2.classList.remove("active");
        p3.classList.remove("active");
        p5.classList.remove("active");
        p6.classList.remove("active");
        periodo1.style.zIndex = 1;
        periodo2.style.zIndex = 1;
        periodo3.style.zIndex = 1;
        periodo4.style.zIndex = 100;
        periodo5.style.zIndex = 1;
        periodo6.style.zIndex = 1;
    });

    p5.addEventListener("click", function() {
        p5.classList.add("active");
        p1.classList.remove("active");
        p2.classList.remove("active");
        p3.classList.remove("active");
        p4.classList.remove("active");
        p6.classList.remove("active");
        periodo1.style.zIndex = 1;
        periodo2.style.zIndex = 1;
        periodo3.style.zIndex = 1;
        periodo4.style.zIndex = 1;
        periodo5.style.zIndex = 100;
        periodo6.style.zIndex = 1;
    });

    p6.addEventListener("click", function() {
        p6.classList.add("active");
        p1.classList.remove("active");
        p2.classList.remove("active");
        p3.classList.remove("active");
        p5.classList.remove("active");
        p4.classList.remove("active");
        periodo1.style.zIndex = 1;
        periodo2.style.zIndex = 1;
        periodo3.style.zIndex = 1;
        periodo4.style.zIndex = 1;
        periodo5.style.zIndex = 1;
        periodo6.style.zIndex = 100;
    });
});

function toggleColor(activeId) {
   
    for (let i = 1; i <= 6; i++) {
        document.getElementById('p' + i).classList.add('cor2');
        document.getElementById('p' + i).classList.remove('cor1');
    }
  
    document.getElementById(activeId).classList.add('cor1');
    document.getElementById(activeId).classList.remove('cor2');
}

document.querySelector('.periodos').addEventListener('click', (event) => {
    if (event.target.closest('.div-style')) {
        const divs = document.querySelectorAll('.bol_per');
        divs.forEach(div => div.classList.remove('active'));

        const periodos = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
        const index = periodos.findIndex(id => id === event.target.closest('.div-style').id);

        if (index !== -1) {
            document.getElementById(`set${index + 1}`).classList.add('active');
        }
    }
});

window.onload = function () {
    document.getElementById('nav_list').style.display = 'none';
    document.getElementById('menuBackground').style.display = 'none';
    document.getElementById('menu_inp').style.display = 'none';
}