function info(){
    var el = document.getElementsByTagName("li"); 
    var output = document.querySelector("#output");
    output.innerHTML = el.length; // "3" => 3 choses sur la liste
    output.innerHTML = el[2].innerHTML; // "Deposit check" => contenu du task n°3
    output.innerHTML = "You have " + el.length + " urgent tasks"; // You have 1 urgent tasks
}


/*-----------------------------*/ 
// (OR)
// will display text from the first urgent task after clicking the button
// function info() {
//     var el = document.getElementsByClassName("task1");
//     var output = document.querySelector("#output");
//     output.innerHTML = el[0].innerHTML; // Finish the report
// }

/*-----------------------------*/ 
// (OR)
function update() {
    var el = document.getElementsByClassName("task2");
    el[0].innerHTML = "Cash check";
    el[1].innerHTML = "Pay bills";
}