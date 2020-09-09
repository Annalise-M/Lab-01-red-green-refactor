const fetch = require('node-fetch');

const getName = ({ name }) => name;

// copyAndPush function
const copyAndPush = (array, item) => {
  const copy = [...array, item];
  return copy;
};

// capitalizeAndFilter
const capitalizeAndFilter = (strings) => {
  const newString = strings.filter(string => string.charAt(0) !== 'f');
  const capitalized = newString.map(string => string.toUpperCase());
  return capitalized;
};

// fetchQuotes
const fetchQuote = async() => {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [{ image, character: name, quote: text }] = await response.json();
  return {
    image,
    name,
    text
  };
};

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter,
  fetchQuote
};
