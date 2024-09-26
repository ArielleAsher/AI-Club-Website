// const hamburger = document.querySelector(".hamburger");
// const navright = document.querySelector(".nav-right");

// hamburger.addEventListener("click",() => {
//     hamburger.classList.toggle("active");
//     navright.classList.toggle("active");
// })

// document.querySelectorAll(".nav-linkkkkk").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navright.classList.remove("active");
// }))

// const navlink = document.querySelectorAll(".nav-link");

// navlink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navright.classList.remove("active");
// }

function nav_toggle() {
    document.getElementById("t1").style.display="block"
}

function closeMenu() {
    document.getElementById("t1").style.display="none"
}



// const hamburger = document.querySelector('.hamburger');
// const menu = document.querySelector('#t1');

// function nav_toggle() {
//   hamburger.classList.toggle('active'); // Toggle active state of hamburger
//   menu.classList.toggle('show'); // Toggle visibility of the menu
// }

// function closeMenu() {
//   hamburger.classList.remove('active'); // Remove active state
//   menu.classList.remove('show'); // Hide the menu
// }

// hamburger.addEventListener('click', nav_toggle);
