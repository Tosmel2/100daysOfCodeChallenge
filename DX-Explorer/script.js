// Mobile responsive menu

const backdrop = document.querySelector(".backdrop");
const menu = document.getElementById("barbox");

function controller() {
    document.querySelector(".nav__Mobilelinks").classList.toggle("show");
    backdrop.classList.toggle("show");
    menu.classList.toggle("change")
}

menu.addEventListener("click", function () {
    controller();
})

backdrop.addEventListener('click', function () {
    controller();
})