/*---------------------------*/ (Travel to Tokyo)
/*---------------------------*/ (Travel to the Moon)
<!doctype html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
 <body>
    <h1>Travel to Tokyo</h1>
    <img src="https://mimo.app/i/tokyo.png">
    <button onclick="nextLocation()">Next Location</button>
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function nextLocation() {
 var text = document.querySelector("h1");
 text.innerHTML = "Travel to the Moon"; // changer texte de h1

 var el = document.querySelector("img");
  el.src = "https://mimo.app/i/moon.png"; // changer image
}