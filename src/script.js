function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}

function animation() {
    ScrollReveal().reveal('.headline' , { delay: 200 });
    ScrollReveal().reveal('.body_center' , { delay: 400 });
    ScrollReveal().reveal('.card' , { delay: 400 });
    ScrollReveal().reveal('.footer' , { delay: 600 });
}

animation();