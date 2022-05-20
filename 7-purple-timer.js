// what happens when a user touches the element of ID "timer"?
// => the text "countdown" is added to the timer element


document.getElementById("timer").addEventListener("touchstart", countDown);

function countUp(){
    document.getElementById("timer").innerhTML = "stopwatch";
}
function countDown(){
    document.getElementById("timer").innerhTML = "countdown";
}

// the touchstart event is triggered => when a user first touches an element