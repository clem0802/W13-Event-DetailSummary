// we use touch events to determine whether a user has interacted with a webpage element 
// and then use a function to perform a specific action
// "TOUCHSTART" => when we want to check whether users have begun to interact with an element
// "TOUCHMOVE" => when we want to determine whether a user has interacted with an element for a "prolonged time"
// "TOUCHEND" => this makes the text disappear when a user removes their finger from the image element
// "TOUCHCANCEL" => check if a touch event gets interrupted (swipe finger off the screen to interrupt)


// fill in the function name that makes the application state "Touched the envelope!"
// when users first interact with the envelope "div"
document.querySelector("div.envelope").addEventListener("touchstart", touchedEnvelope);

function touchedCloud(){
    document.getElementById("success").innerHTML = "touched the cloud!";
}
function touchedEnvelope(){
    document.getElementById("success").innerHTML = "Touched the envelope!";
}
function touchedRemove(){
    document.getElementById("success").innerHTML = "Touched the X!";
}


