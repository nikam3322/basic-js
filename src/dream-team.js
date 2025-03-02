const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';  
  if(Array.isArray(members)) {
    let newArr = members.filter(el => typeof el === 'string' && el !== '').map(y => y.replace(/\s+/g, '')).map(z => z.toUpperCase());    
    newArr.sort();    
    newArr.forEach(x => {
      result += x[0];
    })
    return result;
  } else {
    return false;
  }  
}

module.exports = {
  createDreamTeam
};
