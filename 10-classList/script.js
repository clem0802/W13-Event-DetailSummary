// classList.ADD
// classList.REMOVE
// classList.TOGGLE

function myFunction() {
    var el = document.querySelector("p");
    el.classList.remove("italic");
}


//=> or something like this (ADD classList)
// function myFunction() {
//     var el = document.querySelector("p");
//     el.classList.add("underline");
// }

//=> or add MULTIPLE classes at the same time, separated by COMMAS
// function addClasses() {
//     var el = document.querySelector("p");
//     el.classList.add("bold", "underline", "italic");
// }