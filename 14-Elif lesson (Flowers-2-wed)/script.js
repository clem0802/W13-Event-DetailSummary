let allImages = ["assets/flower1.jpeg","assets/flower2.jpeg","assets/flower3.jpeg","assets/flower4.jpeg"];
let changeButton = document.querySelector(".change-btn");  // (W13-new)
let image = document.querySelector("img");  // (W13-new)
let text = document.querySelector(".text-container");  // (W13-new)
let input = document.getElementById("range-input");  // (W13-new)
let result = document.getElementById("result");  // (W13-new)

input.addEventListener("input",()=>{  // (W13-new)-INPUT(en même temps)
    result.innerHTML = input.value; 
})
input.addEventListener("change",()=>{  // (W13-new)-CHANGE
    result.innerHTML = input.value; 
})



let indexNumber = 1;
function changeImage(){
    let image = document.querySelector("img"); // <img> tag
    image.setAttribute("src",allImages[indexNumber]);
    if(indexNumber === allImages.length-1){
        indexNumber = 0;
    } else{
        indexNumber++;
    }
}

changeButton.addEventListener("click", changeImage); // (W13-new)A, shorter
image.addEventListener("mouseover", changeImage); // (W13-new)B, shorter

// (W13-new)A => longer way to code
// changeButton.addEventListener("click", ()=>{  
//     let image = document.querySelector("img"); 
//     image.setAttribute("src",allImages[indexNumber]);
//     if(indexNumber === allImages.length-1){
//         indexNumber = 0;
//     } else{
//         indexNumber++;
//     }
// })

// (W13-new)B mouseover effet directement "sur" image // => longer way to code
// image.addEventListener("mouseover", ()=>{  
//     let image = document.querySelector("img"); 
//     image.setAttribute("src",allImages[indexNumber]);
//     if(indexNumber === allImages.length-1){
//         indexNumber = 0;
//     } else{
//         indexNumber++;
//     }
// })


// (W13-new)C
// when click on "Change the image" button, the entire LOREM text changes to green
// changeButton.addEventListener("click",()=>{ 
//     text.classList.add("text-with-bg");
// })

// (W13-new)D
// in CSS, create a new class, here "text-with-bg"
// when scroll, the entire LOREM text changes to green
// SCROLL works only with "window" or "document"
document.addEventListener("scroll",()=>{ 
    text.classList.add("text-with-bg");
})

/*---------------------------------------*/
function addBackgroundColor(){
    let container = document.querySelector(".image-container");
    container.classList.toggle("blue-bg");

    let buttonText = document.querySelector(".bg-btn");
    if(buttonText.innerHTML === "Remove bg"){
        buttonText.innerHTML = "Add bg";
    } else{
        buttonText.innerHTML = "Remove bg";
    }
}

/*---------------------------------------*/ 
// (W13-new) for the 3rd button "Change to Improved Style"
let toggleStyle = document.querySelector(".style-btn");
toggleStyle.addEventListener("click", ()=>{
    let allButtons = document.getElementsByTagName("button");
    // allButtons[0].classList.toggle("all-buttons");
    // allButtons[1].classList.toggle("all-buttons");
    // allButtons[2].classList.toggle("all-buttons");

    for (var i=0; i<allButtons.length; i++){
        allButtons[i].classList.toggle("all-buttons");
    }

    let image = document.querySelector("img"); // <img> tag
    image.classList.toggle("img-improved");

    let styleButtonFinal = document.querySelector(".style-btn");

    if(styleButtonFinal.innerHTML === "Change to Improved Style"){
        styleButtonFinal.innerHTML = "Normal Design";
    } else{
        styleButtonFinal.innerHTML = "Change to Improved Style";
    }
});




// function toggleStyle(){
//     let allButtons = document.getElementsByTagName("button");
//     // allButtons[0].classList.toggle("all-buttons");
//     // allButtons[1].classList.toggle("all-buttons");
//     // allButtons[2].classList.toggle("all-buttons");

//     for (var i=0; i<allButtons.length; i++){
//         allButtons[i].classList.toggle("all-buttons");
//     }

//     let image = document.querySelector("img"); // <img> tag
//     image.classList.toggle("img-improved");

//     let styleButtonFinal = document.querySelector(".style-btn");

//     if(styleButtonFinal.innerHTML === "Change to Improved Style"){
//         styleButtonFinal.innerHTML = "Normal Design";
//     } else{
//         styleButtonFinal.innerHTML = "Change to Improved Style";
//     }
// }