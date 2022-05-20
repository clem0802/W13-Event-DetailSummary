function toggleDarkMode() {
    var el = document.querySelector("body");
    el.classList.toggle("darkMode");
}

function gridView() {
    var el = document.querySelector("div");
    el.classList.add("grid");
}

function colView() {
    var el = document.querySelector("div");
    el.classList.remove("grid");
}

function toggleMenu() {
    var el = document.querySelector("header");
    el.classList.toggle("hidden");
}

function galleryOn() {
    var el = document.querySelector("div");
    el.classList.add("border", "bg-white");
}