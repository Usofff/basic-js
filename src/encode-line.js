const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") {
    return "";
  }
  let res = ""; 
  let charCount = 1; 

  for (let i = 0; i < str.length; i++) {
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      charCount++; 
    } else {
      if (charCount > 1) {
        res += charCount;
      }
      res += str[i]; 
      charCount = 1;
    }
  }
  return res; 
}

module.exports = {
  encodeLine
};
