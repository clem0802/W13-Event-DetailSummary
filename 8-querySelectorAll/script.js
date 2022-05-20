// (JS 1)
// retrieve elements that have either the class "sports" OR "tech" => (".sports, .tech")
// if retrieve class "sports" AND "tech" => (".sports.tech")
function displayItems() {
    var el = document.querySelectorAll(".sports, .tech");
    console.log(el.length)
}



// (JS 2)
// make the code retrieve "img" elements as well
// function displayItems() {
//     var el = document.querySelectorAll(".movie, .sports, img");
//     console.log(el[2].src)
// }