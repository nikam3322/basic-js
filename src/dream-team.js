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
  // let filtredMembers = members.filter((elem) => typeof elem == 'string');
  // if (filtredMembers.length == 0) return false;
  // const sortedFiltredMembers = filtredMembers.sort();
  // //   if (a.toLowerCase() < b.toLowerCase()) {
  // //     return -1;
  // //   }
  // //   if (a.toLowerCase() > b.toLowerCase()) {
  // //     return 1;
  // //   }
  // //   return 0;
  // // });

  // for (let i = 0; i < sortedFiltredMembers.length; i++) {
  //   result += sortedFiltredMembers[i][0];
  // }
  // return result;

  let sortedMembers = members.sort();
  if (sortedMembers.filter(String).length == 0) {
    return false
  } else {
    for (let i = 0; i < sortedMembers.length; i++) {
      result += sortedMembers[i][0];
    }
  }
  return result.trim();
  }

module.exports = {
  createDreamTeam
};
