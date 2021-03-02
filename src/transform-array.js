
module.exports = function transform(Arr) {
  if(!(Array.isArray(Arr))){
    return false;
  }
  let arr=[];
  arr.concat(Arr);
  arr.forEach((e,i) => {
    if(e=='--discard-next'){
      arr.splice(i,2);
    }
    if(e=='--discard-prev'){
      arr.splice(i-1,2);
    }
    if(e=='--double-next'){
      e=e[i+1];
    }
    if(e=='--double-prev'){
      e=e[i-1]; 
    } 
    
  });
};
