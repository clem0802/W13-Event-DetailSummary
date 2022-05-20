<!doctype html>
<html>
 <body>
  <p>CMM News, NY</p>
  <p class="copyright">Copyright 2020</p>
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
var el = document.querySelector("p.copyright"); // TAG.CLASS
el.innerHTML = "Copyright 2021";


/*--------------------*/ // pour SWITCHER entre 3 langues (fr,an,chi)
<!doctype html>
<html>
 <body>
  <button onclick="refresh()">Refresh</button>
  <h3 class="update sports"> Olympics News</h3>
  <h3 class="update tech">Y-Phone Released</h3>
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function refresh() {
    var el = document.querySelector(".update.tech");
    el.innerHTML = "Y-Phone SOLD OUT!"; // quand cliquer sur "Refresh", msg change => SOLD OUT!
   }


/*--------------------*/ (SAVE button)
<!DOCTYPE html>
<html>
 <body>
  <h2>M-Docs</h2>
  <p id="status">Changes <span>unsaved</span></p>
  <button onclick="save()">Save</button>
  <hr>
  <h3 class="content title">Learning to Code Journal</h3>
  <p class="content text">Today I learned about querying webpages.</p>
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function save() {
var el = document.querySelector("span"); // or ("p");
el.innerHTML = "saved";
}


/*--------------------*/ (input // type "VALUE")
// after running the code, the "input" element value => "password"
// after running the code, the "placeholder" element value => "clawdius1234"
<!doctype html>
<html>
 <body>  
  <p>Type new password</p>
  <input type="" placeholder="">
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
var el = document.querySelector("input");
el.type = "password";
el.placeholder = "clawdius1234";


/*--------------------*/ (update images)
<!doctype html>
<html>
 <body>
  <button onclick="updateInventory()">Update Inventory</button>
  <p>Check out our new products!</p>
  <img src="https://mimo.app/i/backpack.png">
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function updateInventory() {
 var el = document.querySelector("img");
 el.src = "https://mimo.app/i/camera.png"; // update the img's "src" attribute
}
// ce sera l'impage de caméra qui s'affiche


/*--------------------*/ (linked to 2 CSS files)
/*--------------------*/ (linked to 2 CSS files)
<!doctype html>
<html>
 <head>
  <link rel="stylesheet" href="style1.css">
 </head>
 <body>
  <button onclick="setRowView()">Set to style 1</button>
  <button onclick="setColumnView()">Set to style 2</button>

  <div class="container">
   <div class="item">Home</div>
   <div class="item">About</div>
   <div class="item">Contact</div>
  </div>

  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function setRowView() {
 var el = document.querySelector("link");
 el.href = "style1.css";
}

function setColumnView() {
 var el = document.querySelector("link");
 el.href = "style2.css";
}

// (style1.css)
.container {
 background-color: #edc9b5;
 display: flex;
 flex-direction: row;
 justify-content: center;
}

.item {
 background-color: #ffeccd;
 margin: 10px;
 padding: 5px;
 text-align: center;
}

// (style2.css)
.container {
 background-color: #ffeccd;
 display: flex;
 flex-direction: column;
 justify-content: center;
}

.item {
 background-color: #edc9b5;
 margin: 10px;
 padding: 5px;
 text-align: center;
}