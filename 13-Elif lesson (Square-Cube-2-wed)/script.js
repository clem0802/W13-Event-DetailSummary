let squaredResult = document.getElementById("squared-result");
let cubedResult = document.getElementById("cubed-result");
let inputNumber = document.getElementById("input-number");
let historyContainer = document.getElementById("history-container");

let calculateButton = document.querySelector(".calc-btn") // (W13-new) (btn taken from HTML)


function calculateResult(){
    squaredResult.innerHTML = inputNumber.value * inputNumber.value;
    cubedResult.innerHTML = inputNumber.value * inputNumber.value * inputNumber.value;
    // console.log(squaredResult);
    // console.log(cubedResult);
    // .innerHTML is what shows on the webpage

    let newNumber = document.createElement("p");
    newNumber.innerHTML = inputNumber.value;
    newNumber.setAttribute("id","search"); // to set an ID
    historyContainer.appendChild(newNumber); // to add newNumber inside our empty div
    inputNumber.value = " "; // pour effacer ce qui est déjà saisi
}

function prinMyName(){
    console.log("clémence");
}

// calculateButton.onclick = calculateResult;  // (W13-2nd way-New)
// calculateButton.addEventListener("click", calculateResult);  // (W13-3rd way-New)
// calculateButton.addEventListener("dbclick", prinMyName);

calculateButton.addEventListener("click", ()=>{  // (W13-4th way-New) and comment the function above
    squaredResult.innerHTML = inputNumber.value * inputNumber.value;
    cubedResult.innerHTML = inputNumber.value * inputNumber.value * inputNumber.value;

    let newNumber = document.createElement("p");
    newNumber.innerHTML = inputNumber.value;
    newNumber.setAttribute("id","search"); 
    historyContainer.appendChild(newNumber); 
    inputNumber.value = " ";
}) 


const deleteButton = document.querySelector(".clear-btn");  // (W13-New)
deleteButton.addEventListener("click", ()=>{  // (W13-New), Plus besoin de deleteSearchItem() function en bas
    while(historyContainer.firstChild){
        historyContainer.removeChild(historyContainer.firstChild);
    }
})


/*--------------------------*/   // Plus besoin de deleteSearchItem() function ici
function deleteSearchItem(){
    // let toRemove = document.getElementById("search");
    // historyContainer.removeChild(toRemove); // remove the variable "toRemove" that is just created

    while(historyContainer.firstChild){ // as long as there is 1st child, 
        historyContainer.removeChild(historyContainer.firstChild); // keep doing this (delete ALL at once)
    }
}

