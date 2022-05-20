// (example) https://quote-garden.herokuapp.com/api/v3/quotes
// OpenWeather (My API key) 3e7f970290c943219d1f01d8d6c0009d
// AJAX, the things we use to "GET" information from an API, and use it in our own application
// For AJAX, we use "FETCH"

//  https://quote-garden.herokuapp.com/api/v3/quotes (n'a pas besoin d'un key)


/*-------------可 uncomment, 看得更清楚--------------*/
/*-------------可 uncomment, 看得更清楚--------------*/ 
// fetch()
// .then(()=>{})
// .then(()=>{})
// .catch(err=>console.log(err));


// /*---------------------------*/ (BASIC PATTERN) => 可 uncomment, 看得更清楚
/*---------------------------*/
// BACKTICKS => (``)
// this tells my browser to go fetch/GET the info from this link, and send a REQUEST
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=taipei&appid=3e7f970290c943219d1f01d8d6c0009d`)

// when the info is collected, "1st THEN" we get "response" (as an argument, JSON format)
// 1st (response) could go WITHOUT ()
// .json() will turn the JSON format => into OBJECT format
// a callback function
// .then((response)=>response.json())

// above: =>response.json()  is sent to the "2nd THEN"
// "data" could be "ANY WORD", usally as "data", now in OBJECT format
// (data) could go WITHOUT ()
// .then((data)=>{
//     console.log(data.main.temp)
// })

// only for ERRORS
// .catch(err=>console.log(err));


// /*---------------------------*/ (MAKE IT DYNAMIC) => 可 uncomment, 看得更清楚
/*---------------------------*/
let apiKey = "3e7f970290c943219d1f01d8d6c0009d";
let search = ""; // keep "" BLANK
cityForm = document.getElementById("city-form");
cityInput = document.getElementById("city-input");

// => Format / units of measurement
// &units=metric => put this right after city name
// the real temperature will be changed to C°
cityName = document.getElementById("city-name"); // span
temperature = document.getElementById("temperature"); // span
feelsLike = document.getElementById("feels-like"); // span
windSpeed = document.getElementById("wind-speed"); // span

// https://openweathermap.org/weather-conditions on "OpenWeatherMap" (WEATHER ICON)
weatherIcon = document.getElementById("weather-icon"); 


// don't write "click" but "submit", cause it is a FORM
// eventDefault() => to avoid event refreshing
// whenever .addEventListener to a FORM, must => eventDefault()
cityForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    search = cityInput.value; // RE-assign the "search"
    // taipei => ${search}
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
    .then((response)=>response.json())
    .then((data)=>{
        // console.log(data.main.temp); 
        // 290.52
        // console.log(data.name); 
        // 290.52 
        // Taipei
        cityName.innerHTML = data.name;
        temperature.innerHTML = data.main.temp;
        feelsLike.innerHTML = data.main.feels_like;
        windSpeed.innerHTML = data.wind.speed;

        let iconLink = data.weather[0].icon; // data.weather[0] is an OBJECT
        weatherIcon.setAttribute("src",`http://openweathermap.org/img/wn/${iconLink}@2x.png`)
  });
})
