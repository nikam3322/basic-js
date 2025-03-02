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
  const isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';
  if (!date) return 'Unable to determine the time of year!';
  let result = '';
  let month = date.getMonth();

  if ((date instanceof Date) && (!isNaN(date))) {
    if ((month >= 2) && (month <= 4) || (date == 'spring')) {
      result = 'spring';
    } else if ((month >= 5) && (month <= 7) || (date == 'summer')) {
      result = 'summer';
    } else if ((month >= 8) && (month <= 10) || (date == 'autumn')) {
      result = 'autumn';
    } else {
      result = 'winter';
    }
  } else {
    return 'Invalid date!'
  }
  return result;

}

module.exports = {
  getSeason
};
