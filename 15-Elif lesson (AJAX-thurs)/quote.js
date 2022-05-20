// (from Elif, left open on replit)
let page = Math.ceil(Math.random()*7268)
let randomNumber = Math.ceil(Math.random()*10)

// link below was for the GROUP PROJECT
fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
.then(response=>response.json()) // => turning JSON into OBJECT
.then(data=>{
  
 let quote = data.data[randomNumber].quoteText;
 let author = data.data[randomNumber].quoteAuthor;

 console.log(`"${quote}"  by ${author}`);
});