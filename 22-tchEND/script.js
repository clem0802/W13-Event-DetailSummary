// we use touch events to determine whether a user has interacted with a webpage element 
// and then use a function to perform a specific action
// "TOUCHSTART" => when we want to check whether users have begun to interact with an element
// "TOUCHMOVE" => when we want to determine whether a user has interacted with an element for a "prolonged time"
// "TOUCHEND" => this makes the text disappear when a user removes their finger from the image element
// "TOUCHCANCEL" => check if a touch event gets interrupted (swipe finger off the screen to interrupt)


// what happens at the end of the interaction with the "box" element? 
// => a message reading "done!" appears

let box = document.getElementById("box");
box.addEventListener("touchend", endInteraction());

function endInteraction(){
    document.getElementById("message").innerHTML = "done!";
}
function startInteraction(){
    document.getElementById("message").innerHTML = "start!";
}