// we use touch events to determine whether a user has interacted with a webpage element 
// and then use a function to perform a specific action
// "TOUCHSTART" => when we want to check whether users have begun to interact with an element
// "TOUCHMOVE" => when we want to determine whether a user has interacted with an element for a "prolonged time"
// "TOUCHEND" => this makes the text disappear when a user removes their finger from the image element
// "TOUCHCANCEL" => check if a touch event gets interrupted (swipe finger off the screen to interrupt)


// code "TOUCHEND" event to check whether a user has stopped interacting with the "box2" element
document.getElementById("box2").addEventListener("touchend",touch);

function touch(){
    document.getElementById("message").innerHTML = "Box 2 was touched!";
}
