/*-------------------------------*/ => document.getElementsByClassName
<!doctype html>
<html>
 <body>
  <h3>This week on HomeFlix</h3>
  
  <h4 class="thriller">The Spy that Knew too Much</h4>
  <h4 class="adventure gritty">Batman Returns</h4>
  <h4 class="adventure comedy">Guardians</h4>
  
  <button onclick="updateHeadings()">Update Movies</button>
  
  <script src="script.js"></script>
 </body>
</html>

// (JavaScript)
function updateHeadings() {
    var el = document.getElementsByClassName("adventure comedy");
    el[0].innerHTML = "Dumb and Dumber"; //
}


/*-------------------------------*/ => document.getElementsByTagName
<!doctype html>
<html>
 <body>
  <ul>
   <li>Michael</li>
   <li>Jonas</li>
   <li>Ellen</li>
   <li>Joseph</li>
   <li>Tony</li>
  </ul>
  
  <button onclick="displayInfo()">Display info</button>
  
  <script src="script.js"> </script>
 </body>
</html>

// (JavaScript)
function displayInfo() {
    var el = document.getElementsByTagName("ul");
    console.log(el.length);
}