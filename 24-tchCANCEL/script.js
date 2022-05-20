// we use touch events to determine whether a user has interacted with a webpage element 
// and then use a function to perform a specific action
// "TOUCHSTART" => when we want to check whether users have begun to interact with an element
// "TOUCHMOVE" => when we want to determine whether a user has interacted with an element for a "prolonged time"
// "TOUCHEND" => this makes the text disappear when a user removes their finger from the image element
// "TOUCHCANCEL" => check if a touch event gets interrupted (swipe finger off the screen to interrupt)


// code the touch event that is triggered when a touch event has been interrupted
// try touching the "BOX 1" to see when the event takes place
document.getElementById("box1").addEventListener("touchstart", displayMessage);
document.getElementById("box1").addEventListener("touchcancel", displayCancel);
document.getElementById("box1").addEventListener("touchend", displayName);

function displayMessage(){
    document.getElementById("message").innerHTML = "Release to find out the name.";
}
function displayCancel(){
    document.getElementById("message").innerHTML = "Touch canceled.";
}
function displayName(){
    document.getElementById("message").innerHTML = "This is Box 1.";
}


