/*---------------------------*/ (inline)
/*---------------------------*/ (block)
<!doctype html>
<html>
 <body>
  <button onclick="changeLayout()">Change layout</button>
  <h3>Pics</h3>
  
  <img src="https://mimo.app/i/camera.png">
  <img src="https://mimo.app/i/backpack.png">
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
// au début, c'est sur la même ligne
function changeLayout() {
 var el = document.querySelector("img");
 el.style.display ="block"; // overlapped
}


/*---------------------------*/ (change styles)
<!doctype html>
<html>
 <body>
  <button onclick="changeStyles()">Change Styles</button>
  <p>Spygame III - Coming January</p>
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function changeStyles() {
 var el = document.querySelector("p");
 el.style.backgroundColor = "blue";
 el.style.borderRadius = "45px";
 el.style.textAlign = "center";
} 


/*---------------------------*/ (change CAT pic to DOG pic)
<!doctype html>
<html>
 <body>
  <button onclick="changeProfile()">Change Image</button>
  <br>
  <img src="https://mimo.app/r/cat.png">
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function changeProfile() {
 var el = document.querySelector("img");
 el.setAttribute("src", "https://mimo.app/i/dog.png");
}


/*---------------------------*/ (<input type="text">)
/*---------------------------*/ (<input type="date">)
/*---------------------------*/ (<input type="range">)
/*---------------------------*/ (<input type="email">) ...
<!doctype html>
<html>
 <body>
  <button onclick="changeType()">Change Input Type</button>
  <br>
  
  <input type="date">
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function changeType() {
 var el = document.querySelector("input");
 el.setAttribute("type", "range");
}


/*---------------------------*/ ("p", VISIBILITY)
/*---------------------------*/ <You must complete all fields> !!!
<!doctype html>
<html>
 <body>
  <img style="width: 60%;" src="https://mimo.app/i/tonys-pizza-logo.png">
  <h1>Online Order Form</h1>
  <h2>Email</h2>
  <input placeholder="example@domain.com" type="email">
  
  <h2>Delivery Date</h2>
  <input type="date">
  
  <p style="visibility: hidden;">You must complete all fields</p>
  <button onclick="validate()">Continue</button>
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function validate(){
var el = document.querySelector("p");
el.setAttribute('style', "visibility:visible; color:red");
} 