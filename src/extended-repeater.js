module.exports = function repeater(str = ``, {repeatTimes = 1, separator = `+`, addition = ``, additionRepeatTimes = 1, additionSeparator = '|'}) {
    let newArray = [];
  console.log(str)
    for (let i = 0; i < additionRepeatTimes; i++) {
      newArray.push(`${addition}`);
    }
  
    let newStr = newArray.join(additionSeparator);
    let res = [];
  
    for (let i = 0; i < repeatTimes; i++) {
      res.push(`${str}${newStr}`);
    }
    return res.join(separator);
  };
    