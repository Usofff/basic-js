const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let str2 = s2;
  let counter = 0;
  s1.split('').map(s=>{
    if(str2.includes(s)){
      counter++;
      const index = str2.indexOf(s);
      str2 = str2.slice(0, index) + str2.slice(index + 1)
    }
  })
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
