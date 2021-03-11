
module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)==false)
    {
      return false;
    }
    members = members.filter(e => typeof(e)=='string');
    for (let i = 0; i < members.length; i++) {
        let j=0;
        while(members[i][j]==" "){
            j++;
        }
        members[i]=members[i][j];
        members[i] = members[i].toUpperCase();
    }
    members.sort();
    let str = members.join('');
    
    return str;
  
  
};
