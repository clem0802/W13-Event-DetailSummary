function showError(id){
    var input = document.querySelector(id);
    input.classList.add("error");
}
  
function removeError(id){
    var input = document.querySelector(id);
    input.classList.remove("error");
  }
  
function checkQuantity() { // (1)
   var input = document.querySelector("#quantity");
   return (input.value > 0);
}

// Finally, the function should return a boolean value. 
// If "--" is selected, the function should return false. 
// Otherwise, when a bag color is selected, the function should return true.
function checkColor() { // (2)
    var input = document.querySelector("#color");
    return (input.value !== "--"); //
}

// Finally, the function should return a boolean value depending on the length of the input. 
// If the input's length equals 2, the function should return true. 
// Otherwise, the function should return false.
function checkState() { // (3)
    var input = document.querySelector("#state");
    return (input.value.length === 2); //
}

// convert the 3 functions above into ES6 => "ARROW FUNCTION":
// const checkQuantity = () => document.querySelector("#quantity").value > 0;  // (1)
// const checkColor = () => document.querySelector("#color").value !== "--";  // (2)
// const checkState = () => document.querySelector("#state").value.length == 2;  // (3)

function checkForm(){
    if (!checkQuantity()){
        showError("#quantity");
    } else {
        removeError("#quantity");
    }

    if (!checkColor()){
        showError("#color");
    } else {
        removeError("#color");
    }

    if (!checkState()){
        showError("#state");
    } else {
        removeError("#state");
    }


    // (I) Write an if statement at the end of the checkForm() function body, 
    // just after the logic for checking the "state" field. 
    // The if statement should call all three field-checking functions 
    // (checkQuantity(), checkColor(), and checkState()) and only fire when all three functions return true.
    // (II) The body of the if statement should query the HTML document for the element with id status 
    // and remove the hidden CSS class.
    if (checkQuantity() && checkColor() && checkState()) {  // (I)
        document.querySelector("#status").classList.remove("hidden");  // (II)
    }
}

