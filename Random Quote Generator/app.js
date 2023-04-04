const quotes = [
  "The best way to predict your future is to create it. - Abraham Lincoln",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Thank you for watching!",
]; // here we write the random quotes for our program

// we get the dom elements and we init.. them
const quoteDisplay = document.getElementById("quote-display");
const generateBtn = document.getElementById("generate-btn");

// this function generates the random quotes for us
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerText = randomQuote;
}

generateBtn.addEventListener("click", generateQuote);

// I hope you will like this
