const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 * (month == 12) || (month == 1) || (month == 2)
 * isDate(date) && !isNaN(date) && typeof date.getMonth === 'function'
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();

  if ((month >= 2) && (month <= 4) || (date == 'spring')) {
    return 'spring';
  } else if ((month >= 5) && (month <= 7) || (date == 'summer')) {
    return 'summer';
  } else if ((month >= 8) && (month <= 10) || (date == 'autumn')) {
    return 'autumn';
  } else {
    return 'winter';
  }


throw new Error('Invalid date!');

}

module.exports = {
  getSeason
};
