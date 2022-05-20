var el = document.querySelector("#words");

function setColor(){
  var input = document.querySelector("input")[0];
  el.style.color = input.value;
}

function toggleUnderline(){
    el.classList.toggle("underline");
}

function toggleItalic(){
    el.classList.toggle("italic");
}

function toggleBold(){
    el.classList.toggle("bold");
}

function toggleMonospace(){
    el.classList.toggle("mono");
}

function removeFormat(){
    el.classList.remove("underline", "italic", "bold", "mono");
    el.style.color = "black"; //!!
}