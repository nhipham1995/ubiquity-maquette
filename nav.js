let button = document.getElementById("button-menu");
let ul = document.getElementById("list-menu");

button.addEventListener("click", function() {
    let valueOpen = JSON.parse(button.getAttribute("aria-expanded"));
    button.setAttribute("aria-expanded", !valueOpen);
    ul.hidden = !ul.hidden;
});