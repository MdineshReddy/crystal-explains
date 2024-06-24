const quote = document.getElementById("quote");
const quoter = document.getElementById("quoter");

const quotes = [
  "Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi",
  "A journey of a thousand miles begins with a single step.-Lao Tzu",
  "You must be the change you wish to see in the world. -Mahatma Gandhi",
  "Everything has beauty, but not everyone can see. -Confucius",
  "Do not go gentle into that good night. Rage, rage against the dying of the light. - Dylan Thomas",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. - Mark Twain",
  "The universe doesn't allow perfection. - Stephen Hawking",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them. - William Shakespeare",
  "I know, somehow, that only when it is dark enough can you see the stars. -Martin Luther King Jr.",
  "Today's accomplishments were yesterday's impossibilities. - Robert H. Schuller",
  "Think of all the beauty still left around you and be happy. - Anne Frank",
  "How wonderful it is that nobody need wait a single moment before starting to improve the world. - Anne Frank",
  "The price of anything is the amount of life you exchange for it. - Henry David Thoreau",
  "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty. - Maya Angelou",
  "There are no solutions, only tradeoffs. - Thomas Sowell",
  "Whether You Think You Can or Can't, You're Right. - Henry Ford",
  "You may face many defeats in life but never let yourself be defeated. - Maya Angelou",
];

const quoteNumber = Math.floor(Math.random(quotes.length) * quotes.length);
// console.log(quoteNumber);

const split = quotes[quoteNumber].split("-");
quote.innerText = "“" + split[0].trim() + "”";

quoter.innerText = "- " + split[1].trim();
