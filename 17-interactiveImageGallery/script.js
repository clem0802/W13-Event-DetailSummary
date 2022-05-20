function clearBorders (){
    var elements = document.getElementsByClassName("border");
    for (element of elements) {
        element.classList.remove("border");
    }
}

function setMainImage(id){
    var mainImage = document.querySelector("#mainImage");
    var thumbnail = document.querySelector("#thumbnail"+id);
    var thumbnailSrc = thumbnail.getAttribute("src");
    mainImage.setAttribute("src", thumbnailSrc);
    clearBorders();
    thumbnail.classList.add("border");
}