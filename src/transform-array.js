
module.exports = function transform(arr) {

  if(!(Array.isArray(arr))){
    
    throw new Error('Error');
  } 
  let a = arr.slice();
  if(a[0] === '--discard-prev' || a[0] === '--double-prev'){
    a.shift();
  } 
  if(a[a.length - 1] === '--discard-next' || a[a.length - 1] === '--double-next'){
    a.pop();
  } 
  for(let i = 0; i < a.length; i++){
    if (a[i].toString() === '--discard-next')
    {
      a.splice(i, 2, "deleted");
    }else if(a[i].toString() === '--discard-prev'){
      a.splice(i - 1, 2, "deleted");
    }else if(a[i].toString() === '--double-next'){
      a.splice(i, 1, a[i + 1]);
    }else if(a[i].toString() === '--double-prev'){
      a.splice(i, 1, a[i - 1]);
    } 
  }
  return a.filter(e => e != 'deleted');

};