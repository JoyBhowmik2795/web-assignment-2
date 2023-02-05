let quotes = [

{
"quote": "Success is most often achieved by those who don't know that failure is inevitable.",
"author": "Coco Chanel"
},

{
"quote": "Things work out best for those who make the best of how thingscwork out.",
"author": "John Wooden"
},

{
"quote": "Courage is grace under pressure.",
"author": "Ernest Hemingway"
},

{
"quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
"author": "Jim Rohn"
},

{
"quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning",
"author": "Albert Einstein"
},

{
"quote": "Sometimes you can't see yourself clearly untill you see yourself through the eys of others.",
"author": "Ellen DeGeneres"
},

{
"quote": "All our dreams can come true if we have the courage to purse them.",
"author": "Walt Disney"
},

{
"quote": "It does not matter how slowly you go, so long as you do not stop.",
"author": "Confucius"
},

{
"quote": "Success is walking from failure to failure with no loss of enthusiasm.",
"author": "Winston Churchill"
},

{
"quote": "Someone is sitting in the shade today because someone planted a tree a long time ago.",
"author": "Warren Buffet"
},

]



const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

btn.addEventListener('click',getQuote);

function getQuote (){

  let number = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = '<span>"</span>' + quotes [number].quote + '<span>"</span>'
  author.innerHTML = '<span>--</span>' + quotes [number].author;

}