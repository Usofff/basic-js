
module.exports = class DepthCalculator {
  let a=[];
  calculateDepth( arr) {
    let Depth = 1;
    
    arr.forEach(e => {
      if(Array.isArray(e)){
        Depth++;
        calculateDepth(e);
      }else
    });
  }
};