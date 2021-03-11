const CustomError = require("../extensions/custom-error");
module.exports = function countCats(cats) {
  let c=0;
  cats.forEach(function (e) {
    e.forEach(element => {
      if (element === '^^') {
        c++;
      }
    });
  });
  return c;
};