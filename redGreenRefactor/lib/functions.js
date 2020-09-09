// const fetch = require('node-fetch');


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
}


// fetchQuotes



module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter
};
